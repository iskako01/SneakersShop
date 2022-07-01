import React from "react";
import { SneakerType } from "../../types/sneakerType";
import { CartType } from "../../types/cartType";
import CardList from "./CardList";

type PropsType = {
  onAddToCart: (cartItem: CartType) => void;
  onAddToFavorites: (item: SneakerType) => void;
  onRemoveItemFavorites: (id: number) => void;
  onRemoveCartItem: (id: number) => void;
  loading: boolean;
};

const CardListConatainer: React.FC<PropsType> = ({
  onAddToCart,
  onAddToFavorites,
  onRemoveItemFavorites,
  onRemoveCartItem,
  loading,
}) => {
  return (
    <CardList
      onAddToCart={onAddToCart}
      onAddToFavorites={onAddToFavorites}
      onRemoveItemFavorites={onRemoveItemFavorites}
      onRemoveCartItem={onRemoveCartItem}
      loading={loading}
    />
  );
};

export default CardListConatainer;
