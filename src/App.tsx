import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Drawer from "./components/Drawer/Drawer";
import CardListConatainer from "./components/CardList/CardListContainer";
import { CartType } from "./types/cartType";

function App() {
  const [opened, setOpened] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<Array<CartType>>([]);

  const onAddToCart = (cartItem: CartType) => {
    setCartItems((prev) => [...prev, cartItem]);
  };

  return (
    <div className="wrapper">
      {opened && (
        <Drawer
          opened={opened}
          onClickClose={() => setOpened(false)}
          cartItems={cartItems}
        />
      )}
      <Header onCartOpened={() => setOpened(true)} />

      <div className="content p-40">
        <div className="d-flex justify-between  align-center">
          <div>
            <h1>All sneakers</h1>
          </div>
          <Search />
        </div>

        <CardListConatainer onAddToCart={onAddToCart} />
      </div>
    </div>
  );
}

export default App;
