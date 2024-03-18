import { createContext, useEffect, useState } from "react";
import style from './BasketContext.module.css'

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
      <div className={style.sidebar}>
      <ul>
      {basket.map((item) => (
        <li key={item.id}>
          {item.name} - {item.count}
        </li>
      ))}
    </ul>
      </div>
    </BasketContext.Provider>
  );
};

export default BasketContext;
