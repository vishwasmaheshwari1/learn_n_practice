import { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";



const ItemDetail = () => {

    useEffect(()=>{
        fetchItem();
        
    }, []);
    
    //location not in use because it's not giving id directly segregated from url
    const location = useLocation();
    const params = useParams();


    const [item, setItem] = useState({images:{}});
    
    const fetchItem = async () => {
        //console.log(params);
        const data = await fetch(`https://fortnite-api.com/v2/cosmetics/br/${params.id}`);
        const item = await data.json();

        console.log(item.data);

        setItem(item.data);

     };
    
      return (
        <div>
            <h1>{item.name}</h1>
            <img src={item.images.icon} alt={item.name}/>
       
        </div>
      );


}

export default ItemDetail;