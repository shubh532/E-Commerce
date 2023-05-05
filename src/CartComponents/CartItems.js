import Style from "./CartItem.module.css";
import { useContext } from "react";
import ContextAPI from "../ContextAPI/CreateContext";

export default function CartItem(props) {
  const RemoveItem=useContext(ContextAPI)


  function DeleteItme(id){
    RemoveItem.RemoveCartData(id)
  }

  return (
    <div className={Style.itemContainer}>
      <div className={Style.ImgContainer}>
        <img
          src={props.img}
          alt="item-img"
        ></img>
        <span>{props.title}</span>
      </div>
      <span>{props.price} Rs</span>
      <div className={Style.QtyInp}>
        <input defaultValue={props.quantity} type="number" min="1" max="15"></input>
        <button onClick={DeleteItme.bind(null,props.id)} className={Style.removeBtn}>Remove</button>
      </div>
    </div>
  );
}
