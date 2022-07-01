import React, { useEffect, useState } from "react";
import { SneakerType } from "../../types/sneakerType";
import { favoritesAPI, sneakersAPI } from "../../api/api";
import { CartType } from "../../types/cartType";
import CardList from "./CardList";

type PropsType = {
  onAddToCart: (cartItem: CartType) => void;
  onAddToFavorites: (item: SneakerType) => void;
  onRemoveItemFavorites: (id: number) => void;
};

const CardListConatainer: React.FC<PropsType> = ({
  onAddToCart,
  onAddToFavorites,
  onRemoveItemFavorites,
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
      onAddToFavorites={onAddToFavorites}
      onRemoveItemFavorites={onRemoveItemFavorites}
      items={items}
    />
  );
};

export default CardListConatainer;
