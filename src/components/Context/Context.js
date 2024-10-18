import { createContext, useContext, useState } from 'react';

const Cart = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  const clearCart = () => {
    setCart([]);
  };

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    clearCart(); // Optionally clear cart on logout
  };

  return (
    <Cart.Provider
      value={{
        clearCart,
        cart,
        user,
        login,
        logout,
        setCart,
      }}
    >
      {children}
    </Cart.Provider>
  );
};
export default Context;
export const useGlobalContext = () => {
  return useContext(Cart);
};

export { Cart, Context };
