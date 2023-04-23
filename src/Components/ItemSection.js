import style from "./Section.module.css"

export default function Section(props){
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
        <button>Add To Cart</button>
      </div>
    </div>
  );
}
