import style from "./CartContainer.module.css";
import CartItem from "./CartItems";
import ContextAPI from "../ContextAPI/CreateContext";
import { useContext } from "react";
export default function CartContainer(props) {
  const CartItems=useContext(ContextAPI)

  const TotalAmount = CartItems.Items.reduce((Total, item) => {
    return Total + item.price * item.quantity;
  },0);


  const item=CartItems.Items.map((item)=>{
    return<CartItem key={item.id} title={item.title} price={item.price} img={item.img} quantity={item.quantity}></CartItem>
  })
  return (
    <div className={style.CartContainer}>
      <button onClick={props.UnShowCartBtn} className={style.removeBtn}>X</button>
      <h1>Cart</h1>
      <div className={style.SubHeading}>
        <h3 className={style.Item}>ITEM</h3>
        <h3 className={style.Price}>PRICE</h3>
        <h3 className={style.Quantity}>QUANTITY</h3>
      </div>
      {item}
      <div className={style.Total}>
        <span>Total:</span>
        <p>{TotalAmount} Rs</p>
      </div>
      <button className={style.purchaseBtn}>PURCHASE</button>
    </div>
  );
}
