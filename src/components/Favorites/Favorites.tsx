import React, { useContext } from "react";
import { CartType } from "../../types/cartType";
import { SneakerType } from "../../types/sneakerType";
import { AppContext } from "../../App";
import Card from "../CardList/Card/Card";

type PropsType = {
  loading: boolean;
};

const Favorites: React.FC<PropsType> = ({ loading }) => {
  const { favorites } = useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>My bookmarks</h1>
      </div>

      <div className="d-flex flex-wrap">
        {favorites.map((item) => (
          <Card key={item.id} favorited={true} item={item} loading={loading} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
