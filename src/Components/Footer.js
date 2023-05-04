import Youtube from "../Media/youtube-96.png";
import instagram from "../Media/instagram-94.png";
import twitter from "../Media/twitter-96.png";
import style from "./Fotter.module.css"
import { useContext } from "react";
import TokenAPI from "../ContextAPI/TokenAPI";

export default function Footer(props) {

  const Token=useContext(TokenAPI)

  return (
    <footer className={style.Footer}>
      {Token.isLogin&&<button onClick={props.ShowCartBtn}>Go To Cart</button>}
      <div className={style.footerItem}>
        <h1>The Generic</h1>
        <div className={style.socialLinkCont}>
          <a href="https://www.youtube.com/">
            <img src={Youtube} alt="Youtube"></img>
          </a>
          <a href="https://twitter.com/i/flow/login">
            <img src={twitter} alt="Twitter"></img>
          </a>
          <a href="https://www.instagram.com/?hl=en">
            <img src={instagram} alt="Instagram"></img>
          </a>
        </div>
      </div>
    </footer>
  );
}
