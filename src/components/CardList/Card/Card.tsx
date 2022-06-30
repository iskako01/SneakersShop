import React, { useState, useEffect } from "react";
import btnPlus from "../../../assets/btn-plus.svg";
import btnChecked from "../../../assets/btn-checked.svg";
import unliked from "../../../assets/unliked.svg";
import liked from "../../../assets/liked.svg";
import styles from "./Card.module.scss";
import { SneakerType } from "../../../types/sneakerType";
import { CartType } from "../../../types/cartType";
import { favoritesAPI } from "../../../api/api";

type PropsType = {
  item: SneakerType;
  onAddToCart: (cartItem: CartType) => void;
  onRemoveCartItem: (id: number) => void;
};

const Card: React.FC<PropsType> = ({ item, onAddToCart, onRemoveCartItem }) => {
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<Array<SneakerType>>([]);

  const onAddToFavorites = (item: SneakerType) => {
    setIsFavorite(!isFavorite);
    if (isFavorite) {
      favoritesAPI.removeFavorites(item.id);
      setFavorites((prev) => [...prev, item]);
    } else {
      favoritesAPI.addFavorites(item);
      setFavorites((prev) => [...prev, item]);
    }
  };

  const getItemsFavorites = () => {
    favoritesAPI.getFavorites().then((data) => setFavorites(data));
  };

  const onAddItemToCart = () => {
    onAddToCart(item);
    setIsAdded(!isAdded);
  };

  useEffect(() => {
    getItemsFavorites();
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          onClick={() => onAddToFavorites(item)}
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
  );
};

export default Card;
