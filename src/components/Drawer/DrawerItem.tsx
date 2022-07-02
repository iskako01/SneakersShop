import React from "react";
import btnRemove from "../../assets/btn-remove.svg";
import { CartType } from "../../types/cartType";
import styles from "./Drawer.module.scss";

type PropsType = {
  cartItem: CartType;
  onRemoveCartItem: (id: number) => void;
};

const DrawerItem: React.FC<PropsType> = ({ cartItem, onRemoveCartItem }) => {
  return (
    <div className="d-flex flex-column">
      <div className="items">
        <div className="cartItem d-flex align-center mb-20">
          <img
            className="mr-20"
            width={70}
            height={70}
            src={cartItem.imageUrl!}
            alt=""
          />
          <div className="mr-20">
            <p className="mb-5">{cartItem.title}</p>
            <p>{cartItem.price} $</p>
          </div>
          <img
            className="removeBtn"
            onClick={() => onRemoveCartItem(cartItem.id!)}
            src={btnRemove}
            alt="Remove"
          />
        </div>
      </div>
    </div>
  );
};

export default DrawerItem;
