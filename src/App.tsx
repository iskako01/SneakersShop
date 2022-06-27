import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <svg />
          <div className="headerInfo">
            <h3>Sneakers Shop</h3>
            <p>The best shop of sneakers</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <svg />
            <span>1209 $</span>
          </li>
          <li></li>
        </ul>
      </header>
    </div>
  );
}

export default App;
