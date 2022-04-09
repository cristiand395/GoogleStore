import { AiOutlineSearch } from "react-icons/ai";
import { useState, useContext } from "react";
import { IconContext } from "react-icons";
import { useAppContext } from '@context/AppContext';
import styles from  '@styles/SearchBar.module.css';

const SearchBar = () => {
  const {
    search,
    setSearch,
  } = useAppContext();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.searchBarContainer}>
      <IconContext.Provider value={{ color: "gray", className:styles. iconSearch }}> 
        <AiOutlineSearch />
      </IconContext.Provider>
      <input
        value={search}
        className={styles.searchBar}
        placeholder='Search'
        onChange={handleChange}/>
    </div>
  );
}

export default SearchBar;