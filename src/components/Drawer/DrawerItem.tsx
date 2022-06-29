import React from "react";
import btnRemove from "../../assets/btn-remove.svg";
import { CartType } from "../../types/cartType";
import styles from "./Drawer.module.scss";

type PropsType = {
  cartItem: CartType;
};

const DrawerItem: React.FC<PropsType> = ({ cartItem }) => {
  return (
    <div className="items">
      <div className="cartItem d-flex align-center">
        <img
          className="mr-20"
          width={70}
          height={70}
          src={cartItem.imageUrl}
          alt=""
        />
        <div className="mr-20">
          <p className="mb-5">{cartItem.title}</p>
          <p>{cartItem.price} $</p>
        </div>
        <img className="removeBtn" src={btnRemove} alt="Close" />
      </div>
    </div>
  );
};

export default DrawerItem;
