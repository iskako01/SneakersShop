import React, { useContext } from "react";
import { AppContext } from "../../App";
import arrow from "../../assets/arrow.svg";

type PropsType = {
  title: string;
  description: string;
  image: string;
};

const Info: React.FC<PropsType> = ({ title, description, image }) => {
  const { onCloseCart } = useContext(AppContext);

  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img
        className="mb-20"
        width={120}
        height={120}
        src={image}
        alt="Cart is empty"
      />
      <h2>{title}</h2>
      <p className="opacity-5">{description}</p>
      <button className="greenButton" onClick={onCloseCart}>
        <img src={arrow} alt="Arrow" /> Back
      </button>
    </div>
  );
};

export default Info;
