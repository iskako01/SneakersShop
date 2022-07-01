import React, { useState, useEffect } from "react";
import btnPlus from "../../../assets/btn-plus.svg";
import btnChecked from "../../../assets/btn-checked.svg";
import unliked from "../../../assets/unliked.svg";
import liked from "../../../assets/liked.svg";
import styles from "./Card.module.scss";
import { SneakerType } from "../../../types/sneakerType";
import { CartType } from "../../../types/cartType";
import ContentLoader from "react-content-loader";

type PropsType = {
  item: SneakerType;
  onAddToCart: (cartItem: CartType) => void;
  onAddToFavorites: (item: SneakerType) => void;
  onRemoveItemFavorites: (id: number) => void;
  onRemoveCartItem: (id: number) => void;
  favorited: boolean;
  added: boolean;
  loading: boolean;
};

const Card: React.FC<PropsType> = ({
  item,
  onAddToCart,
  onAddToFavorites,
  onRemoveItemFavorites,
  favorited,
  onRemoveCartItem,
  added,
  loading,
}) => {
  const [isAdded, setIsAdded] = useState<boolean>(added);
  const [isFavorite, setIsFavorite] = useState<boolean>(favorited);

  const onClickFavorite = (item: SneakerType) => {
    setIsFavorite(!isFavorite);
    if (isFavorite) {
      onRemoveItemFavorites(item.id);
    } else {
      onAddToFavorites(item);
    }
  };

  const onAddItemToCart = () => {
    setIsAdded(!isAdded);
    if (isAdded) {
      onRemoveCartItem(item.id);
    } else {
      onAddToCart(item);
    }
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <div>
          <div className={styles.favorite}>
            <img
              onClick={() => onClickFavorite(item)}
              src={isFavorite ? liked : unliked}
              alt="Unliked"
            />
          </div>

          <img width={133} height={112} src={item.imageUrl} alt="" />
          <h5>{item.title}</h5>
          <div className="d-flex justify-between  align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>{item.price} $</b>
            </div>

            <img
              className="cu-p"
              onClick={onAddItemToCart}
              src={isAdded ? btnChecked : btnPlus}
              alt="Plus"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
