import { useReducer } from 'react';
import CartContext from './cart-context';
import cartReducer, { defaultCartState } from './Reducer';

// create CartProvider
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  // Add Item
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  // Remove Item
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const orderSuccessHandler = () => {
    dispatchCartAction({ type: 'SUCCESS' });
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    orderSuccess: orderSuccessHandler
  };

  return (
    <CartContext.Provider value={cartContext} >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
