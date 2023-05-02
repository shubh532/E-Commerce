import { useState } from "react";
import ContextAPI from "./CreateContext";
import ProductsProider from "./ProvideProducts";

function CtxProvider(props) {
  const [CartItem, AddCartItems] = useState([]);

  const AddToCart = (item) => {
    const ExistItem = CartItem.findIndex((items) => items.id === item.id);

    if (CartItem[ExistItem]) {
      CartItem[ExistItem].quantity =
        CartItem[ExistItem].quantity + item.quantity;

      AddCartItems([...CartItem]);
    } else {
      AddCartItems([...CartItem, item]);
    }
  };

  const DefaultValues = {
    Items: CartItem,
    AddToCart: AddToCart,
  };

  return (
    <ContextAPI.Provider value={DefaultValues}>
      <ProductsProider>
        {props.children}
      </ProductsProider>
    </ContextAPI.Provider>
  );
}

export default CtxProvider;
