import searchIcon from "@/assets/svg/searchIcon.svg";
import styles from "./SearchBar.module.scss";
const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <img src={searchIcon} alt="" />
    </div>
  );
};

export default SearchBar;
