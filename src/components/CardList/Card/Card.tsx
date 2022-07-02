import React, { useState, useEffect, useContext } from "react";
import btnPlus from "../../../assets/btn-plus.svg";
import btnChecked from "../../../assets/btn-checked.svg";
import unliked from "../../../assets/unliked.svg";
import liked from "../../../assets/liked.svg";
import styles from "./Card.module.scss";
import { SneakerType } from "../../../types/sneakerType";
import { CartType } from "../../../types/cartType";
import ContentLoader from "react-content-loader";
import { AppContext } from "../../../App";

type PropsType = {
  item: SneakerType;

  favorited: boolean;
  loading: boolean;
};

const Card: React.FC<PropsType> = ({
  item,

  favorited,

  loading,
}) => {
  //   const [isAdded, setIsAdded] = useState<boolean>(false);
  const {
    isItemAdded,
    onAddToFavorites,
    onAddToCart,
    onRemoveItemFavorites,
    onRemoveCartItem,
  } = useContext(AppContext);
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
    if (isItemAdded(item.id)) {
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
              src={isItemAdded(item.id) ? btnChecked : btnPlus}
              alt="Plus"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
