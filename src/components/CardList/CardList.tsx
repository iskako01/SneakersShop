import React, { useState } from "react";
import Card from "./Card/Card";
import { SneakerType } from "../../types/sneakerType";
import { CartType } from "../../types/cartType";
import Search from "../Search/Search";

type PropsType = {
  items: Array<SneakerType>;
  onAddToCart: (cartItem: CartType) => void;
  onAddToFavorites: (item: SneakerType) => void;
  onRemoveItemFavorites: (id: number) => void;
};

const CardList: React.FC<PropsType> = ({
  items,
  onAddToCart,
  onAddToFavorites,
  onRemoveItemFavorites
}) => {
  const [searchValue, setSearchValue] = useState("");

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
          <Card
            item={item}
            key={item.id}
            onAddToCart={onAddToCart}
            onAddToFavorites={onAddToFavorites}
            onRemoveItemFavorites={onRemoveItemFavorites}
            favorited={false}
          />
        ))}
      </div>
      /
    </div>
  );
};

export default CardList;
