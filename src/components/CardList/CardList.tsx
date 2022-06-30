import React from "react";
import Card from "./Card/Card";
import { SneakerType } from "../../types/sneakerType";
import { CartType } from "../../types/cartType";

type PropsType = {
  items: Array<SneakerType>;
  onAddToCart: (cartItem: CartType) => void;
  onRemoveCartItem: (id: number) => void;
  searchValue: string;
};

const CardList: React.FC<PropsType> = ({
  items,
  onAddToCart,
  onRemoveCartItem,
  searchValue,
}) => {
  const sneackerSearch = items.filter((item) => {
    return item.title.toUpperCase().includes(searchValue?.toUpperCase());
  });
  return (
    <div className="d-flex flex-wrap mt-40">
      {sneackerSearch.map((item) => (
        <Card
          item={item}
          key={item.id}
          onAddToCart={onAddToCart}
          onRemoveCartItem={onRemoveCartItem}
        />
      ))}
    </div>
  );
};

export default CardList;
