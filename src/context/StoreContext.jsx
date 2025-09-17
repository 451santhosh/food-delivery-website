import { createContext, useEffect, useState } from "react";
import { food_list } from "../fassets/assets";
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {



  let [cartItems, setCartItems] = useState({});



  let addtoCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }))//new entry into the cart
    }
    else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))//it will increase the value by 1
    }
  }

  let removeCart = (itemId) => {

    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))//it will decrease the value by 1


  }

  let gettotal = () => {
    let totalAmount = 0;
    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        let iteminfo = food_list.find((product) => product._id === item);
        totalAmount += iteminfo.price * cartItems[item];
      }

    }
    return totalAmount;
  }




  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addtoCart,
    removeCart,
    gettotal
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}
export default StoreContextProvider;