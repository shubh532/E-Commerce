import style from "./Section.module.css"
import { useContext } from "react";
import ContextAPI from "../ContextAPI/CreateContext";

export default function Section(props){
  const itemctx=useContext(ContextAPI)
  const Item={...props}
  const AddItemToCart=(item)=>{
    itemctx.AddToCart(item)
  }


  return (
    <div className={style.Container}>
      <h2 className={style.ItemHeadind}>{props.title}</h2>
      <div className={style.imgCont}>
        <img
          src={props.img}
          alt="item-img"
        ></img>
      </div>
      <div className={style.PriceBtn}>
        <span>${props.price}</span>
        <button onClick={AddItemToCart.bind(null,Item)}>Add To Cart</button>
      </div>
    </div>
  );
}
