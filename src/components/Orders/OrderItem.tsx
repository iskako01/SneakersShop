import React from "react";
import { CartType } from "../../types/cartType";
import styles from "../CardList/Card/Card.module.scss";

type PropsType = {
  item: CartType;
};

const OrderItem: React.FC<PropsType> = ({ item }) => {
  return (
    <>
      <div className={styles.card}>
        <img width={133} height={112} src={item.imageUrl!} alt="" />
        <h5>{item.title}</h5>
        <div className="d-flex justify-between  align-center">
          <div className="d-flex flex-column">
            <span>Price:</span>
            <b>{item.price} $</b>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderItem;
