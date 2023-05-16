import style from "./Section.module.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import ContextAPI from "../ContextAPI/CreateContext";


export default function Section(props) {
  const itemctx = useContext(ContextAPI)


  const Item = { ...props }
  const AddItemToCart = (item) => {
    itemctx.AddToCart(item)
  }


  return (
    <div className={style.Container}>
      <h2 className={style.ItemHeadind}>{props.title}</h2>

      <Link to={`/productgallary/${props.id}`}>
        <div className={style.imgCont}>
          <img
            src={props.img}
            alt="item-img"
          ></img>
        </div>
      </Link>


      <div className={style.PriceBtn}>
        <span>&#8377;{props.price}</span>
        <button onClick={AddItemToCart.bind(null, Item)}>Add To Cart</button>
      </div>
    </div>
  );
}
