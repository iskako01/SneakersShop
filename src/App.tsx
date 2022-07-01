import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import CardListConatainer from "./components/CardList/CardListContainer";
import Favorites from "./components/Favorites/Favorites";
import Orders from "./components/Orders/Orders";
import { CartType } from "./types/cartType";
import { cartAPI, favoritesAPI, sneakersAPI } from "./api/api";
import { Route, Routes } from "react-router-dom";
import { SneakerType } from "./types/sneakerType";

type AppContextType = {
  items: SneakerType[];
  cartItems: CartType[];
  favorites: SneakerType[];
};

export const AppContext = createContext<AppContextType>({
  items: [],
  cartItems: [],
  favorites: [],
});

function App() {
  const [opened, setOpened] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<Array<CartType>>([]);
  const [favorites, setFavorites] = useState<Array<SneakerType>>([]);
  const [items, setItems] = useState<Array<SneakerType>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const cartsData = await cartAPI.getcart();
      const sneakersData = await sneakersAPI.getSneakers();
      const favoritesData = await favoritesAPI.getFavorites();
      setLoading(false);
      setCartItems(cartsData);
      setFavorites(favoritesData);
      setItems(sneakersData);
    };
    fetchData();
  }, []);

  const onAddToCart = (cartItem: CartType) => {
    cartAPI.addItemTocart(cartItem);
    setCartItems((prev) => [...prev, cartItem]);
  };

  const onRemoveCartItem = (id: number) => {
    cartAPI.removeItemCart(id);
    console.log("removeItemCart");

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
    <AppContext.Provider value={{ items, favorites, cartItems }}>
      <div className="wrapper">
        <Header onCartOpened={() => setOpened(true)} />

        <Routes>
          <Route
            path="/favorites"
            element={
              <Favorites
                onAddToFavorites={onAddToFavorites}
                onAddToCart={onAddToCart}
                onRemoveItemFavorites={onRemoveItemFavorites}
                onRemoveCartItem={onRemoveCartItem}
                loading={loading}
              />
            }
          />

          <Route path="/orders" element={<Orders />} />

          <Route
            path="/*"
            element={
              <CardListConatainer
                onAddToCart={onAddToCart}
                onAddToFavorites={onAddToFavorites}
                onRemoveItemFavorites={onRemoveItemFavorites}
                onRemoveCartItem={onRemoveCartItem}
                loading={loading}
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
          />
        )}
      </div>
    </AppContext.Provider>
  );
}

export default App;
