import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    const fetchCartData = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      const userId = JSON.parse(atob(token.split('.')[1])).id;

      try {
        const response = await axios.get(`http://localhost:4001/cart/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setCartItemsCount(response.data.items.length);
      } catch (err) {
        console.error('Error fetching cart data:', err);
      }
    };

    fetchCartData();
  }, []);

  const updateCartItemsCount = (count) => {
    setCartItemsCount(count);
  };

  return (
    <CartContext.Provider value={{ cartItemsCount, updateCartItemsCount }}>
      {children}
    </CartContext.Provider>
  );
};