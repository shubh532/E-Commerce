import { Route, Switch } from "react-router-dom"
import React, { useState } from "react";
import Footer from "./Components/Footer";
import CartContainer from "./CartComponents/CartContainer";
import CtxProvider from "./ContextAPI/CtxProvider";
import HomePage from "./Pages/Home";
import ProductGallary from "./Components/ProductsGallary"
import Header from "./Components/Header";
import Music from "./Pages/Music";
import AboutUs from "./Pages/AboutUs"
import ProductDetails from "./MainPages/ProductPages/ProductDetails"
import ContactUs from "./Pages/ContactUs";


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
      <Switch>
        <Route path="/"exact>
          <HomePage ShowCartBtn={ShowCartBtn}></HomePage>
          {ShowCart && <CartContainer UnShowCartBtn={UnShowCartBtn} />}
          <Music />
        </Route>
        <Route path="/products" >
          <Header ShowCartBtn={ShowCartBtn} />
          {ShowCart && <CartContainer UnShowCartBtn={UnShowCartBtn} />}
          <ProductGallary />
        </Route>
        <Route path="/aboutus" >
          <Header ShowCartBtn={ShowCartBtn} />
          {ShowCart && <CartContainer UnShowCartBtn={UnShowCartBtn} />}
          <AboutUs />
        </Route>
        <Route path="/contactus" >
          <Header ShowCartBtn={ShowCartBtn} />
          {ShowCart && <CartContainer UnShowCartBtn={UnShowCartBtn} />}
          <ContactUs/>
        </Route>
        <Route path="/productgallary/:productId" >
          <Header ShowCartBtn={ShowCartBtn} />
          {ShowCart && <CartContainer UnShowCartBtn={UnShowCartBtn} />}
          <ProductDetails/>
        </Route>
      </Switch>

      <Footer ShowCartBtn={ShowCartBtn}></Footer>
    </CtxProvider>
  );
}

export default App;
