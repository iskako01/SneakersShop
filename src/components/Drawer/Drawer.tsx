import React from "react";
import sneakerOne from "../../assets/sneakers/1.jpg";
import btnRemove from "../../assets/btn-remove.svg";
import arrow from "../../assets/arrow.svg";
import styles from "./Drawer.module.scss";

const CartItem = () => {
  return (
    <div className="items">
      <div className="cartItem d-flex align-center">
        <img className="mr-20" width={70} height={70} src={sneakerOne} alt="" />
        <div className="mr-20">
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            eligendi.
          </p>
          <p>120 $</p>
        </div>
        <img className="removeBtn" src={btnRemove} alt="" />
      </div>
    </div>
  );
};

const Drawer = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h3 className="d-flex justify-between  mb-30">
          Cart <img className="removeBtn cu-p" src={btnRemove} alt="" />
        </h3>
        <CartItem />

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
