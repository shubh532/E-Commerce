import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProductsGallary from "./Components/ProductsGallary";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <ProductsGallary></ProductsGallary>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
