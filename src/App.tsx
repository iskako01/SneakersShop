import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Drawer from "./components/Drawer/Drawer";
import CardListConatainer from "./components/CardList/CardListContainer";
import Favorites from "./components/Favorites/Favorites";
import { CartType } from "./types/cartType";
import { cartAPI } from "./api/api";
import { Route, Routes } from "react-router-dom";

function App() {
  const [opened, setOpened] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<Array<CartType>>([]);

  const onAddToCart = (cartItem: CartType) => {
    cartAPI.addItemTocart(cartItem);
    setCartItems((prev) => [...prev, cartItem]);
  };

  const onRemoveCartItem = (id: number) => {
    cartAPI.removeItemCart(id);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="wrapper">
      <Header onCartOpened={() => setOpened(true)} />

      <Routes>
        <Route path="/favorites" element={<Favorites />} />
        <Route
          path="/*"
          element={
            <CardListConatainer
              onAddToCart={onAddToCart}
              onRemoveCartItem={onRemoveCartItem}
            />
          }
        />
      </Routes>

      {opened && (
        <Drawer
          opened={opened}
          onClickClose={() => setOpened(false)}
          onRemoveCartItem={onRemoveCartItem}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      )}
    </div>
  );
}

export default App;
