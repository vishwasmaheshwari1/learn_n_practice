const {MongoClient, ObjectId} = require("mongodb")

const express = require("express");
const res = require("express/lib/response");

//to allow users to upload files
const multer = require("multer")
const upload = multer()

const sanitizeHTML = require("sanitize-html")
const fse = require("fs-extra")
const sharp = require("sharp")

let db
const path = require("path")
const React = require("react")
const ReactDOMServer = require("react-dom/server")
const AnimalCard = require("./src/components/AnimalCard").default //as it's using modern exporting method

//when the app first launches, make sure the public/uploaded-photos folder exists
fse.ensureDirSync(path.join("public", "uploaded-photos"))

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views")
app.use(express.static("public"))

//if browser send json to server, it can be easily accessed
app.use(express.json())

// to access form values easily
app.use(express.urlencoded({extended: false}))


function passwordProtected(req, res, next) {

	//to create password authentication
	//susceptible to brute force
	res.set("WWW-Authenticate", "Basic realm='Our MERN App'")

	if (req.headers.authorization == "234afasdf") {
		next()
	} else {
		res.status(401).send("Try Again!")
	}

	//next()
}

app.get("/", async (req, res) => {

	const allAnimals = db.collection("animals").find().toArray()

	//console.log(allAnimals)

	//res.send(`<h1>Welcome To Home Page</h1>${allAnimals.map((animal) => `<p>${animal.name} - ${animal.species}<p>`).join('')}`);

	const generatedHTML = ReactDOMServer.renderToString(
		<div className="container">
			{!allAnimals.length && <p>There are no Animal yet, admin needs to add it.</p>}
			
			<div className="animal-grid mb-3">
				{allAnimals.map(animal => <AnimalCard key={animal._id} name={animal.name} species={animal.species} photo={animal.photo} id={animal._id} readOnly={true} /> )}

			</div>
			<p><a href="/admin">Login /manage the animal listings</a></p>

		</div>
	)
	

	//res.render("home", {allAnimals})
	res.render("home", { generatedHTML })

});


app.use(passwordProtected)

//app.get("/admin", passwordProtected, (req, res) => {
app.get("/admin", (req, res) => {
	//res.send("This is top secret admin page!");
	res.render("admin");
});

app.get("/api/animals", async (req, res) => {

	const allAnimals = db.collection("animals").find().toArray()
	res.json(allAnimals)
})


app.post("/create-animal", upload.single("photo"), ourCleanUp, async (req, res) => {



	if (req.file) {
		const photofilename = `${Date.now()}.jpg`
		await sharp(req.file.buffer).resize(844, 456).jpeg({ quality: 60 }).toFile(path.join("public", "uploaded-photos", photofilename))
		
		req.cleanData.photo = photofilename

	}

	console.log(req.body)
	const info = await db.collection("animals").insertOne(req.cleanData)

	const newAnimal = await db.collection("animals").findOne({_id: new ObjectId(info.insertedId)})

	res.send(newAnimal)
})


app.delete("/animal/:id", async (req, res) => {
	if (typeof req.params.id != "string") req.params.id = ""

	const doc = await db.collection("animals").findOne({ _id: new ObjectId(req.params.id) })
	
	if (doc.photo) {
		fse.remove(path.join("public","uploaded-photos", doc.photo))
	}

	db.collection("animals").deleteOne({ _id: new ObjectId(req.params.id) })
	res.send("Good Job")

})


app.post("/update-animal", upload.single("photo"), ourCleanUp, async (req, res) => {

	if (req.file) {

		//if they are uploading a new photo
		const photofilename = `${Date.now()}.jpg`
		await sharp(req.file.buffer).resize(844, 456).jpeg({ quality: 60 }).toFile(path.join("public", "uploaded-photos", photofilename))
		req.cleanData.photo = photofilename

		const info = db.collection("animals").findOneAndUpdate({ _id: new Object(req.body._id) }, { $set: req.cleanData })
		
		if (info.val.photo) {
			fse.remove(path.join("public","uploaded-photos", info.val.photo))
		}

		res.send(photofilename)

	} else {

		//if they are not uploading a new photo
		const info = db.collection("animals").findOneAndUpdate({ _id: new Object(req.body._id) }, { $set: req.cleanData })
		res.send(false)
	}

})

function ourCleanUp(req, res, next) {

	if (typeof req.body.name != "string") req.body.name = ""
	if (typeof req.body.species != "string") req.body.species = ""
	if (typeof req.body._id != "string") req.body._id = ""


	req.cleanData = {
		name: sanitizeHTML(req.body.name.trim(), { allowedTags: [], allowedAttributes: {} }),
		species: sanitizeHTML(req.body.species.trim(), { allowedTags: [], allowedAttributes: {} })
		//_id: sanitizeHTML(req.body._id.trim(), { allowedTags: [], allowedAttributes: {} }),
		
	}

	next()
}

async function start() {

	const client = new MongoClient("mongodb://root:root@localhost:27017/AmazingMernApp?&authSource=admin");
	await client.connect();
	db = client.db()
	app.listen(3000);
}

start()

//app.listen(3000);
