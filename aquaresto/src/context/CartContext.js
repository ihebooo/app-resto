import React, { useState, useEffect, useContext } from 'react';

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart data from localStorage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Add an item to the cart
  const addItemToCart = (item) => {

    if(cart.length>0 )return false
    setCart((prevCart) => [...prevCart, item]);
  };

  // Remove an item from the cart
  const removeItemFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.meal_id !== itemId));
  };

  // Clear the entire cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        removeItemFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartContext, CartProvider, useCart };
