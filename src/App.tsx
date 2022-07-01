import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import CardListConatainer from "./components/CardList/CardListContainer";
import Favorites from "./components/Favorites/Favorites";
import { CartType } from "./types/cartType";
import { cartAPI, favoritesAPI } from "./api/api";
import { Route, Routes } from "react-router-dom";
import { SneakerType } from "./types/sneakerType";

function App() {
  const [opened, setOpened] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<Array<CartType>>([]);
  const [favorites, setFavorites] = useState<Array<SneakerType>>([]);

  const onAddToCart = (cartItem: CartType) => {
    cartAPI.addItemTocart(cartItem);
    setCartItems((prev) => [...prev, cartItem]);
  };

  const onRemoveCartItem = (id: number) => {
    cartAPI.removeItemCart(id);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorites = async (item: SneakerType) => {
    try {
      const { data } = await favoritesAPI.addFavorites(item);
      setFavorites((prev) => [...prev, data]);
    } catch (error) {
      alert(error);
    }
  };

  const onRemoveItemFavorites = (id: number) => {
    favoritesAPI.removeFavorites(id);
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="wrapper">
      <Header onCartOpened={() => setOpened(true)} />

      <Routes>
        <Route
          path="/favorites"
          element={
            <Favorites
              favorites={favorites}
              onAddToFavorites={onAddToFavorites}
              onAddToCart={onAddToCart}
              onRemoveItemFavorites={onRemoveItemFavorites}
            />
          }
        />
        <Route
          path="/*"
          element={
            <CardListConatainer
              onAddToCart={onAddToCart}
              onAddToFavorites={onAddToFavorites}
              onRemoveItemFavorites={onRemoveItemFavorites}
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
