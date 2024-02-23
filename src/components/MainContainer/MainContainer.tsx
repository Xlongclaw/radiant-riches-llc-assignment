import styles from "./ManiContainer.module.scss";
import HeroText from "../HeroText/HeroText";

const MainContainer = () => {
  return (
    <div className={styles.container}>
      <HeroText />
    </div>
  );
};

export default MainContainer;
