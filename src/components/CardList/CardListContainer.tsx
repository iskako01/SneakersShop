import React, { useEffect, useState } from "react";
import { SneakerType } from "../../types/sneakerType";
import { sneakersAPI } from "../../api/api";
import { CartType } from "../../types/cartType";
import CardList from "./CardList";

type PropsType = {
  onAddToCart: (cartItem: CartType) => void;
  onRemoveCartItem: (id: number) => void;
  searchValue: string;
};

const CardListConatainer: React.FC<PropsType> = ({
  onAddToCart,
  onRemoveCartItem,
  searchValue,
}) => {
  const [items, setIems] = useState<Array<SneakerType>>([]);

  const getSneakers = async () => {
    const data = await sneakersAPI.getSneakers();
    setIems(data);
  };

  useEffect(() => {
    getSneakers();
  }, []);

  return (
    <CardList
      onAddToCart={onAddToCart}
      onRemoveCartItem={onRemoveCartItem}
      items={items}
      searchValue={searchValue}
    />
  );
};

export default CardListConatainer;
