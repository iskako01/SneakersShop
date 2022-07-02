import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import cart from "../../assets/cart.svg";
import user from "../../assets/user.svg";
import favorite from "../../assets/heart.svg";

type PropsType = {
  totalPrice: number;
  onCartOpened: () => void;
};

const Header: React.FC<PropsType> = ({ totalPrice, onCartOpened }) => {
  return (
    <header className="d-flex justify-between  align-center p-40">
      <div className="d-flex  align-center">
        <Link to={"/"}>
          <img src={logo} />
        </Link>

        <div>
          <h3 className="m-0 text-uppercase">Sneakers Shop</h3>
          <p className="opacity-5">The best shop of sneakers</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={onCartOpened}>
          <img src={cart} />
          <span>{totalPrice} $</span>
        </li>
        <li>
          <Link to={"/favorites"}>
            <img src={favorite} />
          </Link>
        </li>
        <li>
          <Link to={"/orders"}>
            <img src={user} />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
