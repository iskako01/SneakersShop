import React from "react";
import btnRemove from "../../assets/btn-remove.svg";
import arrow from "../../assets/arrow.svg";
import styles from "./Drawer.module.scss";
import DrawerItem from "./DrawerItem";

type PropsType = {
  onClickClose: () => void;
  opened: boolean;
};

const Drawer: React.FC<PropsType> = ({ onClickClose, opened }) => {
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
        <DrawerItem />

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
