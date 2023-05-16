import Style from "./ProductsGallary.module.css";
import React from "react";
import Section from "./ItemSection"
import { useContext } from "react";
import ProductContextAPI from "../ContextAPI/ProductContext";
export default function ProductsGallary() {
  const Products = useContext(ProductContextAPI)


  return (
    <React.Fragment>
      <h1>MUSIC</h1>
      <div className={Style.ProductContainer}>
        {Products.Product.map((item) => {
          return (
              <Section
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
                img={item.imageUrl}
              ></Section>
          );
        })}
      </div>
    </React.Fragment>
  );
}
