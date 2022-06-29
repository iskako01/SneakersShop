import React from "react";
import btnRemove from "../../assets/btn-remove.svg";
import styles from "./Drawer.module.scss";

type PropsType = {};

const DrawerItem: React.FC<PropsType> = ({}) => {
  return (
    <div className="">
      <div className="cartItem d-flex align-center">
        <img
          className="mr-20"
          width={70}
          height={70}
          src="./img/sneakers/1.jpg"
          alt=""
        />
        <div className="mr-20">
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            eligendi.
          </p>
          <p>120 $</p>
        </div>
        <img className="removeBtn" src={btnRemove} alt="Close" />
      </div>
    </div>
  );
};

export default DrawerItem;
