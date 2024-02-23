import styles from "./ManiContainer.module.scss";
import {
  BuilderContainer,
  HeroText,
  OptionsContainer,
  ResultDetailsStrip,
} from "@components";

const MainContainer = () => {
  return (
    <div className={styles.container}>
      <HeroText />
      <ResultDetailsStrip />
      <OptionsContainer />
      <BuilderContainer />
    </div>
  );
};

export default MainContainer;
