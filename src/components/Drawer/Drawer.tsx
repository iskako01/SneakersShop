import React, { useEffect, useState } from "react";
import btnRemove from "../../assets/btn-remove.svg";
import arrow from "../../assets/arrow.svg";
import styles from "./Drawer.module.scss";
import empty from "../../assets/empty-cart.png";
import orderComplete from "../../assets/complete-order.png";
import DrawerItem from "./DrawerItem";
import { CartType } from "../../types/cartType";
import { ordersAPI } from "../../api/api";
import Info from "../Info/Info";

type PropsType = {
  onCloseCart: () => void;
  opened: boolean;
  cartItems: Array<CartType>;
  onRemoveCartItem: (id: number) => void;
  clearCart: () => void;
};

const Drawer: React.FC<PropsType> = ({
  onCloseCart,
  opened,
  cartItems,
  onRemoveCartItem,
  clearCart,
}) => {
  const [isOrderComplete, setOrderComplete] = useState<boolean>(false);

  const onClickOrder = () => {
    ordersAPI.addOrder({
      items: cartItems,
      id: "",
    });
    setOrderComplete(true);
    clearCart();
  };

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ""}`}>
      <div className={styles.drawer}>
        <h3 className="d-flex justify-between  mb-30">
          Cart{" "}
          <img
            className="removeBtn cu-p"
            src={btnRemove}
            alt="Close"
            onClick={onCloseCart}
          />
        </h3>

        {cartItems.length === 0 ? (
          <Info
            title={isOrderComplete ? "Order is placed" : "Cart is empty"}
            description={
              isOrderComplete
                ? "Your order will soon be handed over to the courier service"
                : "Add product to cart"
            }
            image={isOrderComplete ? orderComplete : empty}
          />
        ) : (
          <div>
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

              <button className="greenButton" onClick={onClickOrder}>
                Place an order <img src={arrow} alt="Arrow" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Drawer;
