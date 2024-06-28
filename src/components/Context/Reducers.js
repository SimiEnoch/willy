export const cartReducer = (state, action) => {
  // Retrieve cart data from localStorage or initialize an empty cart
  const localStorageCart = localStorage.getItem('cart');
  const initialCartState = localStorageCart
    ? JSON.parse(localStorageCart)
    : { cart: [] };

  if (action.type === 'CLEAR_CART') {
    // Clear the cart
    localStorage.removeItem('cart');
    return { ...initialCartState, cart: [] };
  }
  if (action.type === 'REMOVE') {
    // Remove item from the cart
    const updatedCart = {
      cart: state.cart.filter(
        (cartItem) => cartItem.id !== action.payload
      ),
    };
    // Update localStorage with the updated cart
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return updatedCart;
  }
  if (action.type === 'INCREASE') {
    // Increase item quantity
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    // Update localStorage with the updated cart
    localStorage.setItem('cart', JSON.stringify({ cart: tempCart }));
    return { ...state, cart: tempCart };
  }

  if (action.type === 'DECREASE') {
    // Decrease item quantity
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    // Update localStorage with the updated cart
    localStorage.setItem('cart', JSON.stringify({ cart: tempCart }));
    return { ...state, cart: tempCart };
  }

  if (action.type === 'GET_TOTALS') {
    // Calculate total and amount
    let { total, amount } = state.cart.reduce(
      (cartTotal, Cart) => {
        const { price, amount } = Cart;
        const itemTotal = price * amount;
        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }
  return state;
};
