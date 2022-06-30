import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Drawer from "./components/Drawer/Drawer";
import CardListConatainer from "./components/CardList/CardListContainer";
import { CartType } from "./types/cartType";
import { cartAPI } from "./api/api";

function App() {
  const [opened, setOpened] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<Array<CartType>>([]);
  const [searchValue, setSearchValue] = useState("");

  const onAddToCart = (cartItem: CartType) => {
    cartAPI.addTocart(cartItem);
    setCartItems((prev) => [...prev, cartItem]);
  };

  const onRemoveCartItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="wrapper">
      {opened && (
        <Drawer
          opened={opened}
          onClickClose={() => setOpened(false)}
          onRemoveCartItem={onRemoveCartItem}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      )}
      <Header onCartOpened={() => setOpened(true)} />

      <div className="content p-40">
        <div className="d-flex justify-between  align-center">
          <div>
            <h1>{searchValue ? `Search:${searchValue}` : "All sneakers"}</h1>
          </div>
          <Search setSearchValue={setSearchValue} />
        </div>

        <CardListConatainer
          searchValue={searchValue}
          onAddToCart={onAddToCart}
          onRemoveCartItem={onRemoveCartItem}
        />
      </div>
    </div>
  );
}

export default App;
