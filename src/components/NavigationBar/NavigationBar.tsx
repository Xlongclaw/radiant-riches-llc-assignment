import { NavigationLinksContainer, SearchBar } from "@components";
import styles from "./NavigationBar.module.scss";
const NavigationBar = () => {
  return (
    <div className={styles.nav}>
      <SearchBar />
      <div>
        <img
          className={styles.searchIcon}
          src="images/search-white.png"
          alt=""
        />
      </div>
      <NavigationLinksContainer />
    </div>
  );
};

export default NavigationBar;
