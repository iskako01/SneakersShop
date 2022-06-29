import React, { useState } from "react";
import btnPlus from "../../../assets/btn-plus.svg";
import btnChecked from "../../../assets/btn-checked.svg";
import unliked from "../../../assets/unliked.svg";
import styles from "./Card.module.scss";
import { SneakerType } from "../../../types/sneakerType";
import { CartType } from "../../../types/cartType";

type PropsType = {
  item: SneakerType;
  onAddToCart: (cartItem: CartType) => void;
};

const Card: React.FC<PropsType> = ({ item, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState<boolean>(false);

  const onSneakerAdd = () => {
    onAddToCart(item);
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src={unliked} alt="Unliked" />
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
          onClick={onSneakerAdd}
          src={isAdded ? btnChecked : btnPlus}
          alt="Plus"
        />
      </div>
    </div>
  );
};

export default Card;
