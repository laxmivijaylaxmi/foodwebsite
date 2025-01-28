import { createContext, useEffect, useState } from "react";
import { food_list } from "../../MenuItem";

export const StoreContext = createContext(null);

const StoreContentProvider = (props) => {
  const [cartItem, setCartItem] = useState({});

  const addtoCart = (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const updateCartQuantity= (itemId,quantity)=>{
    setCartItem((prev)=>({
      ...prev,[itemId]:quantity
    }))
  }

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  useEffect(()=>{
    console.log(cartItem)
  },[cartItem])

  const contextValue = {
    food_list,
    cartItem,
    setCartItem,
    addtoCart,
    removeFromCart,
    updateCartQuantity
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContentProvider;
