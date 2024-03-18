import { createContext, useEffect, useState } from "react";

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const savedBasket = JSON.parse(localStorage.getItem("basket")) || [];
    setBasket(savedBasket);
  }, []);

  const addToBasket = (product) => {
    const existItemIndex = basket.findIndex(
      (basketItem) => basketItem.id === product.id
    );
    if (existItemIndex !== -1) {
      basket[existItemIndex].count += 1;
      localStorage.setItem("basket", JSON.stringify(basket));
    } else {
      const updateBasket = [...basket, product];
      setBasket(updateBasket);
      localStorage.setItem("basket", JSON.stringify(updateBasket));
    }
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContext;
