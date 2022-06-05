import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Shop() {


useEffect(()=>{
    fetchItems();
}, []);

const [items, setItems] = useState([]);

const fetchItems = async () => {
    const data = await fetch(
        'https://fortnite-api.com/v2/cosmetics/br'
    );

    const items = await data.json();
    
    console.log(items);

    setItems(items.data.slice(0,10));
};

  return (
    <div>
        <h1>Shop</h1>

        {
            items.map((item) => <h1 key={item.id}><Link to={`/shop/${item.id}`}>{item.name}</Link></h1> )
        }

    </div>
  );
}

export default Shop;
