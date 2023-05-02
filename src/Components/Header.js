import React from "react";
import { Link } from "react-router-dom";
import Style from "./Header.module.css";
import ContextAPI from "../ContextAPI/CreateContext";
import { useContext } from "react";
function Header(props) {
  const Ctx = useContext(ContextAPI);

  let TotalQauntity = 0;
  Ctx.Items.forEach((item) => {
    TotalQauntity = item.quantity + TotalQauntity;
  });

  return (
    <React.Fragment>
      <header className={Style.Header}>
        <ul className={Style.list}>
        <li>
            <Link to="/">Home</Link>
            
          </li>
          <li ><Link to="/products">Store</Link></li>
          <li>
          <Link to="/aboutus">About Us</Link>
          </li>
          <li>
          <Link to="/contactus">Contact Us</Link>
          </li>
          <button onClick={props.ShowCartBtn} className={Style.CartBtn}>
            Cart {TotalQauntity}
          </button>
        </ul>
        <h1>The Generics</h1>
      </header>
    </React.Fragment>
  );
}

export default Header;
