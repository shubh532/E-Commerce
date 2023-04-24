import { useState } from "react";
import ContextAPI from "./CreateContext";

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
    mess: "helo",
  };

  return (
    <ContextAPI.Provider value={DefaultValues}>
      {props.children}
    </ContextAPI.Provider>
  );
}

export default CtxProvider;
