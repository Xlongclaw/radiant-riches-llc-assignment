import styles from "./ManiContainer.module.scss";
import {
  BuilderContainer,
  HeroText,
  OptionsContainer,
  RelatedDealsSection,
  ResultDetailsStrip,
} from "@components";

const MainContainer = () => {
  return (
    <div className={styles.container}>
      <HeroText />
      <ResultDetailsStrip />
      <OptionsContainer />
      <BuilderContainer />
      <RelatedDealsSection />
    </div>
  );
};

export default MainContainer;
