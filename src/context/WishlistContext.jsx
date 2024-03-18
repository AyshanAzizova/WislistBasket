import { createContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    setWishlist(savedWishlist);
  }, []);

  const addToWishlist = (product) => {
    setWishlist((currentWishList) => {
      const isWishlist = currentWishList.some((item) => item.id === product.id);
      
      let updatedWishlist;
      if (isWishlist) {
        
        updatedWishlist = currentWishList.filter(
          (item) => item.id !== product.id
        );
        setActive(true);
      } else {
        
        updatedWishlist = [...currentWishList, product];
        setActive(false);
      }

      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, active }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContext;
