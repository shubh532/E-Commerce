import { Link } from "react-router-dom";
import React from "react";
import Style from "../Components/Header.module.css";
import ContextAPI from "../ContextAPI/CreateContext";
import { useContext } from "react";
import Music from "./Music";
function HomePage(props) {
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
            <Link to="./">Home</Link>
          </li>
          <li><Link to="/store">Store</Link></li>
          <li>
            <Link to="/aboutus">About</Link>
          </li>
          <li>
            <Link to="/contactus">Contact</Link>
          </li>
          <button onClick={props.ShowCartBtn} className={Style.CartBtn}>
            Cart {TotalQauntity}
          </button>
        </ul>
        <h1>WelCome TO The Generics</h1>
        <h4 className={Style.subheading}> Get Our Latest Album </h4>
        <button className={Style.PlayBtn}>&#9654;</button>
      </header>
      <Music></Music>
    </React.Fragment>
  );
}

export default HomePage;
