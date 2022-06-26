# Guided Project (To understand integration of react with MERN)

`node server.js` - to run js file using node
`docker compose up -d` - to create docker image in docker container

### to run mongo db database on local computer as defined in our yml file

`docker compose stop` and `docker compose start` - to stop and start docker

### Note - Docker not running. So, installing distribution i.e. (recommended is) `Ubuntu` and then installing `WSL` (requires distribution for installation)

`npm install mongodb` - to interact with mongodb
`npm install nodemon` - to monitor js changes in node server (otherwise need to restart node server)
`npm install ejs` - template engine (to write js in our HTML(document) file)

### `Note: ` Now, after having see our mongodb data loaded in home.ejs it's not enough because we want to perform CRUD operation on our app without reloading the page. So, instead of server side js (node) we'll be using client side javascript (react)

In `views/admin.ejs` we're setting up our client site html to load our `reactdom` component in it.

`app.use(express.static("public"))` - used to make files of a folder accessible with just only file names

### Browser can't understand JSX. It needs to be converted to regular js using a tool (`webpack`).

For webpack: `Input folder` will be `src/index.js` and `output folder` will be `public/main.js` This `main.js` file is used in `admin.ejs` which rendered from node server.

### Intalling libraries for react workflow and JSX conversion

`npm install react react-dom @babel/core @babel/preset-react babel-loader webpack webpack-cli webpack-node-externals npm-run-all`

`webback --watch` - to check client side JS changes. Similar to nodemon which checks for server sode js changes

`npm-run-all` - allows to run multiple commands in parallel at once

`npm install axios` - to make api request (GET/POST) [more preferred than fetch()]

Setting up middleware in server.js to authenticate user. `app.use(passwordProtected)`

### multi-part forms (to send images, files) i.e. data other than text (json) - `npm install multer`

### Note: data sent to server (mongodb - which is not susceptible to sql injection) must be filtered. remove HTML or any mongodb commands

`npm install sanitize-html` - to remove unwanted html from post request data

`npm install fs-extra sharp` - to work with file system and image processing modules

## Extras

### using serverconfig in `webback.config.js` - It allows to run React on the server side
