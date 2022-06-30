import React from "react";
import search from "../../assets/search.svg";
import styles from "./Search.module.scss";

type PropsType = {
  setSearchValue: (e: any) => void;
};

const Search: React.FC<PropsType> = ({ setSearchValue }) => {
  return (
    <div className={styles.searchBlock}>
      <img src={search} alt="search" />
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default Search;
