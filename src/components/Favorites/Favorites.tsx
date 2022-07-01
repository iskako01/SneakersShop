import React, { useContext } from "react";
import { CartType } from "../../types/cartType";
import { SneakerType } from "../../types/sneakerType";
import { AppContext } from "../../App";
import Card from "../CardList/Card/Card";

type PropsType = {
  onAddToFavorites: (item: SneakerType) => void;
  onAddToCart: (cartItem: CartType) => void;
  onRemoveItemFavorites: (id: number) => void;
  onRemoveCartItem: (id: number) => void;

  loading: boolean;
};

const Favorites: React.FC<PropsType> = ({
  onAddToFavorites,
  onRemoveItemFavorites,
  onAddToCart,
  onRemoveCartItem,
  loading,
}) => {
  const context = useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>My bookmarks</h1>
      </div>

      <div className="d-flex flex-wrap">
        {context.favorites.map((item) => (
          <Card
            key={item.id}
            favorited={true}
            onAddToFavorites={onAddToFavorites}
            onRemoveItemFavorites={onRemoveItemFavorites}
            onRemoveCartItem={onRemoveCartItem}
            item={item}
            onAddToCart={onAddToCart}
            loading={loading}
            added={context.cartItems.some(
              (cartItem) => cartItem.id === item.id
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
