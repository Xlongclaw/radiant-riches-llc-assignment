import BuilderWrapper from "../BuilderWrapper/BuilderWrapper";
import styles from "./BuilderContainer.module.scss";

const BuilderContainer = () => {
  return (
    <div className={styles.container}>
      <BuilderWrapper type="normal" />
      <BuilderWrapper type="normal" />
    </div>
  );
};

export default BuilderContainer;
