import Style from "./ProductsGallary.module.css";
import React from "react";
import Section from "./ItemSection";
const ProductsArr = [
  {
    id: Math.random(),
    title: "Colors",
    quantity:1,
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: Math.random(),
    title: "Black and white Colors",
    quantity:1,
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: Math.random(),
    title: "Yellow and Black Colors",
    quantity:1,
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: Math.random(),
    title: "Blue Color",
    quantity:1,
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
