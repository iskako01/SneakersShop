import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import CardList from "./components/CardList/CardList";
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
  isItemAdded: (id: number) => boolean;
  onAddToFavorites: (item: SneakerType) => void;
  onAddToCart: (item: CartType) => void;
  onRemoveItemFavorites: (id: number) => void;
  onRemoveCartItem: (id: number) => void;
  onCloseCart: () => void;
};

export const AppContext = createContext<AppContextType>({
  items: [],
  cartItems: [],
  favorites: [],
  isItemAdded: () => false,
  onAddToFavorites: (item: SneakerType) => {},
  onAddToCart: (item: CartType) => {},
  onRemoveItemFavorites: (id: number) => {},
  onRemoveCartItem: (id: number) => {},
  onCloseCart: () => {},
});

function App() {
  const [opened, setOpened] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<Array<CartType>>([]);
  const [favorites, setFavorites] = useState<Array<SneakerType>>([]);
  const [items, setItems] = useState<Array<SneakerType>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [cartsData, sneakersData, favoritesData] = await Promise.all([
          cartAPI.getcart(),
          sneakersAPI.getSneakers(),
          favoritesAPI.getFavorites(),
        ]);

        setLoading(false);

        setCartItems(cartsData);
        setFavorites(favoritesData);
        setItems(sneakersData);
      } catch (error) {
        alert(error);
      }
    };
    fetchData();
  }, []);

  const onAddToCart = (cartItem: CartType) => {
    cartAPI.addItemTocart(cartItem);
    setCartItems((prev) => [...prev, cartItem]);
  };

  const onCloseCart = () => {
    setOpened(false);
  };

  const onRemoveCartItem = (id: number) => {
    cartAPI.removeItemCart(id);
    console.log("removeItemCart");

    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
    cartItems.forEach((item) => {
      cartAPI.removeItemCart(item.id!);
    });
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

  const isItemAdded = (id: number) => {
    return cartItems.some((cartItem) => Number(cartItem.id) === Number(id));
  };

  const totalPrice: number = cartItems.reduce(
    (sum, item) => item.price! + sum,
    0
  );

  return (
    <AppContext.Provider
      value={{
        items,
        favorites,
        cartItems,
        isItemAdded,
        onAddToFavorites,
        onAddToCart,
        onRemoveItemFavorites,
        onRemoveCartItem,
        onCloseCart,
      }}
    >
      <div className="wrapper">
        <Header onCartOpened={() => setOpened(true)} totalPrice={totalPrice} />

        <Routes>
          <Route path="/favorites" element={<Favorites loading={loading} />} />

          <Route path="/orders" element={<Orders />} />

          <Route path="/*" element={<CardList loading={loading} />} />
        </Routes>

        {opened && (
          <Drawer
            opened={opened}
            onCloseCart={onCloseCart}
            onRemoveCartItem={onRemoveCartItem}
            cartItems={cartItems}
            clearCart={clearCart}
            totalPrice={totalPrice}
          />
        )}
      </div>
    </AppContext.Provider>
  );
}

export default App;
