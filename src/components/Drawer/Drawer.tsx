import React, { useEffect } from "react";
import btnRemove from "../../assets/btn-remove.svg";
import arrow from "../../assets/arrow.svg";
import styles from "./Drawer.module.scss";
import empty from "../../assets/empty-cart.png";
import DrawerItem from "./DrawerItem";
import { CartType } from "../../types/cartType";
import { cartAPI } from "../../api/api";

type PropsType = {
  onClickClose: () => void;
  opened: boolean;
  cartItems: Array<CartType>;
  onRemoveCartItem: (id: number) => void;
  setCartItems: (cartItem: CartType[]) => void;
};

const Drawer: React.FC<PropsType> = ({
  onClickClose,
  opened,
  cartItems,
  onRemoveCartItem,
  setCartItems,
}) => {
  const getSneakers = async () => {
    const data = await cartAPI.getcart();
    setCartItems(data);
  };

  useEffect(() => {
    getSneakers();
  }, []);

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

        {cartItems.length === 0 && (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width={120}
              height={120}
              src={empty}
              alt="Cart is empty"
            />
            <h2>The cart is empty</h2>
            <p className="opacity-5">Add at least one product</p>
            <button className="greenButton" onClick={onClickClose}>
              <img src={arrow} alt="Arrow" /> Back
            </button>
          </div>
        )}

        {cartItems.map((item) => (
          <DrawerItem
            onRemoveCartItem={onRemoveCartItem}
            key={item.id}
            cartItem={item}
          />
        ))}

        <div className="cartTotalBlock">
          <ul className="">
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
