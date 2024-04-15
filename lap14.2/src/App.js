import { useState } from 'react';
import Header from "./components/Layout/Header.js";
import Meals from "./components/Meals/Meals.js";
import Cart from "./components/Cart/Cart.js";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => setCartIsShow(true);
  const hideCartHandler = () => setCartIsShow(false);

  return (
    <div>
      {cartIsShow && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
