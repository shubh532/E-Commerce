import style from "./CartContainer.module.css";
import CartItem from "./CartItems";
export default function CartContainer() {
  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];
  const item=cartElements.map((item)=>{
    return<CartItem title={item.title} price={item.price} img={item.imageUrl} Qty={item.quantity}></CartItem>
  })
  return (
    <div className={style.CartContainer}>
      <button className={style.removeBtn}>X</button>
      <h1>Cart</h1>
      <div className={style.SubHeading}>
        <h3 className={style.Item}>ITEM</h3>
        <h3 className={style.Price}>PRICE</h3>
        <h3 className={style.Quantity}>QUANTITY</h3>
      </div>
      {item}
      <div className={style.Total}>
        <span>Total:</span>
        <p>350 Rs</p>
      </div>
      <button className={style.purchaseBtn}>PURCHASE</button>
    </div>
  );
}
