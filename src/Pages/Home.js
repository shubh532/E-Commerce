import { Link } from "react-router-dom";
import Style from "../Components/Header.module.css";
import ContextAPI from "../ContextAPI/CreateContext";
import { useContext } from "react";
function HomePage(props) {
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
          <li><Link to="/aboutus">About</Link></li>
          <button onClick={props.ShowCartBtn} className={Style.CartBtn}>Cart {TotalQauntity}</button>
        </ul>
        <h1>WelCome TO The Generics</h1>
        <h4 className={Style.subheading}> Get Our Latest Album </h4>
        <button className={Style.PlayBtn}>&#9654;</button>
    </header>
  );
}

export default HomePage;
