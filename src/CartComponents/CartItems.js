import Style from "./CartItem.module.css";

export default function CartItem(props) {
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
        <button className={Style.removeBtn}>Remove</button>
      </div>
    </div>
  );
}
