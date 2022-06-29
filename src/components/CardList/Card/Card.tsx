import React, { useState } from "react";
import btnPlus from "../../../assets/btn-plus.svg";
import btnChecked from "../../../assets/btn-checked.svg";
import unliked from "../../../assets/unliked.svg";
import styles from "./Card.module.scss";

const Card = () => {
  const [isAdded, setIsAdded] = useState<boolean>(false);

  const onSneakerAdd = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src={unliked} alt="Unliked" />
      </div>

      <img width={133} height={112} src="./img/sneakers/1.jpg" alt="" />
      <h5>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum,
        inventore?
      </h5>
      <div className="d-flex justify-between  align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>120 $</b>
        </div>

        <img
          className="cu-p"
          onClick={onSneakerAdd}
          src={isAdded ? btnChecked : btnPlus}
          alt=""
        />
      </div>
    </div>
  );
};

export default Card;
