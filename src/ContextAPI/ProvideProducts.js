import { useState } from "react";
import ProductContextAPI from "./ProductContext";

function ProductsProider(props){
  // const[review,Setreview]=useState()
    const [Product,AddProducts]=useState([
        {
          id: 1234,
          title: "Colors",
          quantity: 1,
          price: 100,
          imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
          review:[]
        },
      
        {
          id: 2345,
          title: "Black and white Colors",
          quantity: 1,
          price: 50,
          imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
          review:[]
        },
      
        {
          id: 3456,
          title: "Yellow and Black Colors",
          quantity: 1,
          price: 70,
          imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
          review:[]
        },
      
        {
          id: 4567,
          title: "Blue Color",
          quantity: 1,
          price: 100,
          imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
          review:[]
        },
      ])

     function AddProduct(Product){
      AddProducts([...Product])
     }


    const DefaultProduct={
        Product:Product,
        AddProduct:AddProduct
    }
    return(
        <ProductContextAPI.Provider value={DefaultProduct}>
            {props.children}
        </ProductContextAPI.Provider>
    )
}

export default ProductsProider;