import React, { useState, useContext } from "react";
import Card from "./Card/Card";
import { SneakerType } from "../../types/sneakerType";
import { CartType } from "../../types/cartType";

import Search from "../Search/Search";
import { AppContext } from "../../App";

type PropsType = {
  loading: boolean;
};

const CardList: React.FC<PropsType> = ({ loading }) => {
  const [searchValue, setSearchValue] = useState("");
  const { items } = useContext(AppContext);

  const sneackerSearch = items.filter((item) => {
    return item.title.toUpperCase().includes(searchValue?.toUpperCase());
  });

  return (
    <div className="content p-40">
      <div className="d-flex justify-between  align-center">
        <div>
          <h1>{searchValue ? `Search:${searchValue}` : "All sneakers"}</h1>
        </div>
        <Search setSearchValue={setSearchValue} />
      </div>
      <div className="d-flex flex-wrap mt-40">
        {sneackerSearch.map((item) => (
          <Card item={item} key={item.id} favorited={false} loading={loading} />
        ))}
      </div>
      /
    </div>
  );
};

export default CardList;
