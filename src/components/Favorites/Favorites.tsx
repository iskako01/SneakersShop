import React from "react";
import { CartType } from "../../types/cartType";
import { SneakerType } from "../../types/sneakerType";
import Card from "../CardList/Card/Card";

type PropsType = {
  onAddToFavorites: (item: SneakerType) => void;
  onAddToCart: (cartItem: CartType) => void;
  onRemoveItemFavorites: (id: number) => void;
  favorites: SneakerType[];
};

const Favorites: React.FC<PropsType> = ({
  onAddToFavorites,
  onRemoveItemFavorites,
  onAddToCart,
  favorites,
}) => {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>My bookmarks</h1>
      </div>

      <div className="d-flex flex-wrap">
        {favorites.map((item) => (
          <Card
            key={item.id}
            favorited={true}
            onAddToFavorites={onAddToFavorites}
            onRemoveItemFavorites={onRemoveItemFavorites}
            item={item}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
