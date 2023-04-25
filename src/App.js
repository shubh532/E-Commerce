import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import CartContainer from "./CartComponents/CartContainer";
import CtxProvider from "./ContextAPI/CtxProvider";
import HomePage from "./Pages/Home";
import Music from "./Pages/Music";

function App() {
  const [ShowCart, UnShowcart] = useState(false);

  function ShowCartBtn() {
    UnShowcart(true);
  }
  function UnShowCartBtn() {
    UnShowcart(false);
  }

  return (
    <CtxProvider>
      <Outlet />
      {ShowCart && <CartContainer UnShowCartBtn={UnShowCartBtn} />}
      <Outlet />
      <Footer ShowCartBtn={ShowCartBtn}></Footer>
    </CtxProvider>
  );
}

export default App;
