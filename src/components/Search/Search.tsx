import React from "react";
import search from "../../assets/search.svg";
import styles from "./Search.module.scss";

const Search = () => {
  return (
    <div className={styles.searchBlock}>
      <img src={search} alt="search" />
      <input type="text" placeholder="Search..." />
    </div>
  );
};

export default Search;
