import { useEffect, useState } from "react";
import ContextAPI from "./CreateContext";
import ProductsProider from "./ProvideProducts";

function CtxProvider(props) {
  let email = localStorage.getItem("Email")
  if (email) {
    email = email.replace(/[.]/g, "")
    email = email.replace(/[@]/g, "")
  }
  const [CartItem, AddCartItems] = useState([]);
  
  useEffect(() => {
    async function fetchCartData (){
      const Response = await fetch(`https://crudcrud.com/api/8cc949f802f1460ea9dafb7634a652f6/${email}`)
      const CartData = await Response.json()
      AddCartItems([...CartData])
    }
    fetchCartData()
  }, [])


  const AddToCart = async (product) => {

    const ExistItem = CartItem.findIndex((items) => items.id === product.id);

    if (CartItem[ExistItem]) {
      try {
        CartItem[ExistItem].quantity = CartItem[ExistItem].quantity + product.quantity;
        
        const {id,title,price,quantity,img}=CartItem[ExistItem]

        const item ={
          id:id,
          title:title,
          price:price,
          quantity:quantity,
          img:img
        }
        const ID = CartItem[ExistItem]._id
        delete item._id

        const response = await fetch(`https://crudcrud.com/api/8cc949f802f1460ea9dafb7634a652f6/${email}/${ID}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({...item})
        })
        
        if (response.ok) {
          alert("Added to Cart")
        } else {
          AddCartItems([...CartItem])
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      const response = await fetch(`https://crudcrud.com/api/8cc949f802f1460ea9dafb7634a652f6/${email}`, {
        method: "POST",
        body: JSON.stringify(product),
        headers: { "Content-Type": "application/json" }
      })
      if (response.ok) {
        const Data = await response.json()

        AddCartItems([...CartItem, Data])
      }
    }
  };

  const RemoveCartData = async (id) => {
    const Response = await fetch(`https://crudcrud.com/api/8cc949f802f1460ea9dafb7634a652f6/${email}/${id}`, {
      method: "DELETE"
    })
    const Items = CartItem.filter(item => item._id !== id)
    AddCartItems(Items)
  }

  const DefaultValues = {
    Items: CartItem,
    AddToCart: AddToCart,
    RemoveCartData: RemoveCartData
  };

  return (
    <ContextAPI.Provider value={DefaultValues}>
      <ProductsProider>
        {props.children}
      </ProductsProider>
    </ContextAPI.Provider>
  );
}

export default CtxProvider;
