import { Link } from "react-router-dom";
import React from "react";
import Style from "./Header.module.css";
import ContextAPI from "../ContextAPI/CreateContext";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
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
          <li><Link to="/store">Store</Link></li>
          <li>
            <Link to="/aboutus">About</Link>
          </li>
          <li>
            <Link to="/contactus">Contact</Link>
          </li>
          <button onClick={Ctx.ShowCartBtn} className={Style.CartBtn}>
            Cart {TotalQauntity}
          </button>
        </ul>
        <h1>The Generics</h1>
      </header>
      <Outlet/>
    </React.Fragment>
  );
}

export default Header;
