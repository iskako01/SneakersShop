import React from "react";
import btnRemove from "../../assets/btn-remove.svg";
import arrow from "../../assets/arrow.svg";
import styles from "./Drawer.module.scss";
import DrawerItem from "./DrawerItem";
import { CartType } from "../../types/cartType";

type PropsType = {
  onClickClose: () => void;
  opened: boolean;
  cartItems: Array<CartType>;
};

const Drawer: React.FC<PropsType> = ({ onClickClose, opened, cartItems }) => {
  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ""}`}>
      <div className={styles.drawer}>
        <h3 className="d-flex justify-between  mb-30">
          Cart{" "}
          <img
            className="removeBtn cu-p"
            src={btnRemove}
            alt="Close"
            onClick={onClickClose}
          />
        </h3>

        {cartItems.map((item) => (
          <DrawerItem cartItem={item} />
        ))}

        <div className="cartTotalBlock">
          <ul className="cartTotalBlock">
            <li className="d-flex">
              <span>Total:</span>
              <div></div>
              <b>120 $</b>
            </li>
          </ul>

          <button className="greenButton">
            Place an order <img src={arrow} alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
