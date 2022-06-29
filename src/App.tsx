import React, { useState } from "react";
import CardList from "./components/CardList/CardList";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Drawer from "./components/Drawer/Drawer";

function App() {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <div className="wrapper">
      {opened && (
        <Drawer opened={opened} onClickClose={() => setOpened(false)} />
      )}
      <Header onCartOpened={() => setOpened(true)} />

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
