import { createContext, useContext, useState } from "react";
const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cart, setCart] = useState([]);
  //console.log("cart:", cart);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const value = {
    selectedCategory,
    setSelectedCategory,
    cart,
    addToCart,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
