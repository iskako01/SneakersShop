import React from "react";
import Card from "./Card/Card";
import { SneakerType } from "../../types/sneakerType";
import { CartType } from "../../types/cartType";

type PropsType = {
  items: Array<SneakerType>;
  onAddToCart: (cartItem: CartType) => void;
};

const CardList: React.FC<PropsType> = ({ items, onAddToCart }) => {
  return (
    <div className="d-flex flex-wrap mt-40">
      {items.map((item) => (
        <Card item={item} key={item.id} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default CardList;
