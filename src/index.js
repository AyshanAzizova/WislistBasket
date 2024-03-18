import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { WishlistProvider } from './context/WishlistContext';
import { BasketProvider } from './context/BasketContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <WishlistProvider>
    <BasketProvider>
      <App />
      
    </BasketProvider>

  </WishlistProvider>
);




