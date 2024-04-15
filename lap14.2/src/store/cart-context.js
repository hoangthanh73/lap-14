import React from 'react';

// create CartContext
const CartContext = React.createContext({
  totalAmount: 0,
  addItem: (item) => { },
  removeItem: (id) => { }
});


export default CartContext;