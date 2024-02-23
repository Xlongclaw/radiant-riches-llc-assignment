import { NavigationLinksContainer, SearchBar } from "@components";
import styles from "./NavigationBar.module.scss";
const NavigationBar = () => {
  return (
    <div className={styles.nav}>
      <SearchBar />
      <NavigationLinksContainer />
    </div>
  );
};

export default NavigationBar;
