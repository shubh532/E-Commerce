import React, { useState } from "react";
import { Outlet,useOutlet } from "react-router-dom";
import Footer from "./Components/Footer";
import CartContainer from "./CartComponents/CartContainer";
import CtxProvider from "./ContextAPI/CtxProvider";


function App() {
  const [ShowCart, UnShowcart] = useState(false);

  function ShowCartBtn() {
    UnShowcart(true);
  }
  function UnShowCartBtn() {
    UnShowcart(false);
  }
 const outlet=useOutlet()
  return (
    <CtxProvider>
      <Outlet outlet={outlet} ShowCartBtn={ShowCartBtn}/>
      {ShowCart && <CartContainer UnShowCartBtn={UnShowCartBtn} />}
      <Footer ShowCartBtn={ShowCartBtn}></Footer>
    </CtxProvider>
  );
}

export default App;
