import Style from "./Header.module.css";

function Header() {
  return (
    <header className={Style.Header}>
        <ul className={Style.list}>
          <li>Home</li>
          <li>Store</li>
          <li>About</li>
          <button className={Style.CartBtn}>Cart</button>
        </ul>
        <h1>The Generics</h1>
    </header>
  );
}

export default Header;
