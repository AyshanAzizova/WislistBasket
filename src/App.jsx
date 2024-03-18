import { useContext } from "react";
import BasketContext from "./context/BasketContext";
import WishlistContext from "./context/WishlistContext";

const productsData = [
  { id: 1, name: "Apple", price: 1, count: 0 },
  { id: 2, name: "Heyva", price: 2, count: 0 },
  { id: 3, name: "Mango", price: 5, count: 0 },
  { id: 4, name: "Ananas", price: 8, count: 0 },
  { id: 5, name: "Nar", price: 3, count: 0 },
];

function App() {
  const { addToBasket } = useContext(BasketContext);
  const { addToWishlist, wishlist } = useContext(WishlistContext);

  const isInWishlist = (productId) =>
    wishlist.some((item) => item.id === productId);
  return (
    <div>
      <ul>
        {productsData &&
          productsData.map((item) => (
            <li key={item.id}>
              <h1>{item.name}</h1>
              <p>Price:{item.price}</p>
              <button onClick={() => addToBasket(item)}>Add Basket</button>
              <button
                onClick={() => addToWishlist(item)}
                style={{ background: isInWishlist(item.id) ? "red" : "blue" }}
              >
                Add Wishlist
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
