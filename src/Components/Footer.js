import Youtube from "../Media/youtube-96.png";
import instagram from "../Media/instagram-94.png";
import twitter from "../Media/twitter-96.png";
import style from "./Fotter.module.css"

export default function Footer(props) {
  return (
    <footer className={style.Footer}>
      <button onClick={props.ShowCartBtn}>Go To Cart</button>
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
