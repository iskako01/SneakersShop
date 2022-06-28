import React from "react";
import CardList from "./components/CardList/CardList";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Drawer from "./components/Drawer/Drawer";

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />

      <div className="content p-40">
        <div className="d-flex justify-between  align-center">
          <div>
            <h1>All sneakers</h1>
          </div>
          <Search />
        </div>

        <CardList />
      </div>
    </div>
  );
}

export default App;
