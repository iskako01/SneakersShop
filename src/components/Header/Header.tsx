import React from "react";
import logo from "../../assets/logo.png";
import cart from "../../assets/cart.svg";
import user from "../../assets/user.svg";

const Header = () => {
  return (
    <header className="d-flex justify-between  align-center p-40">
      <div className="d-flex  align-center">
        <img src={logo} />
        <div>
          <h3 className="m-0 text-uppercase">Sneakers Shop</h3>
          <p className="opacity-5">The best shop of sneakers</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30">
          <img src={cart} />
          <span>1209 $</span>
        </li>
        <li>
          <img src={user} />
        </li>
      </ul>
    </header>
  );
};

export default Header;
