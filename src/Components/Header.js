import Style from "./Header.module.css";
import ContextAPI from "../ContextAPI/CreateContext";
import { useContext } from "react";

function Header(props) {
  const Ctx=useContext(ContextAPI)

  let TotalQauntity=0
  Ctx.Items.forEach((item)=>{
    TotalQauntity = item.quantity+TotalQauntity
  })

  return (
    <header className={Style.Header}>
        <ul className={Style.list}>
          <li>Home</li>
          <li>Store</li>
          <li>About</li>
          <button onClick={props.ShowCartBtn} className={Style.CartBtn}>Cart {TotalQauntity}</button>
        </ul>
        <h1>The Generics</h1>
    </header>
  );
}

export default Header;
