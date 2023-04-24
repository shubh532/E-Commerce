import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProductsGallary from "./Components/ProductsGallary";
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

  return (
    <CtxProvider>
      <Header ShowCartBtn={ShowCartBtn}></Header>
      {ShowCart && <CartContainer UnShowCartBtn={UnShowCartBtn} />}
      <ProductsGallary></ProductsGallary>
      <Footer ShowCartBtn={ShowCartBtn}></Footer>
    </CtxProvider>
  );
}

export default App;
