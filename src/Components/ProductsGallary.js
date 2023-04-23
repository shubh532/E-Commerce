import Style from "./ProductsGallary.module.css";
import React from "react";
import Section from "./ItemSection";
const ProductsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

export default function ProductsGallary() {
  return (
    <React.Fragment>
      <h1>MUSIC</h1>
      <div className={Style.ProductContainer}>
        {ProductsArr.map((item) => {
          return (
            <Section
              title={item.title}
              price={item.price}
              img={item.imageUrl}
            ></Section>
          );
        })}
      </div>
    </React.Fragment>
  );
}
