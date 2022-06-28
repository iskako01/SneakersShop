import React from "react";
import plus from "../../assets/plus.svg";
import onePicture from "../../assets/sneakers/1.jpg";
import styles from "./Card.module.scss";

const Card = () => {
  return (
    <div className={styles.card}>
      <img width={133} height={112} src={onePicture} alt="" />
      <h5>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum,
        inventore?
      </h5>
      <div className="d-flex justify-between  align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>120 $</b>
        </div>
        <button>
          <img src={plus} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Card;
