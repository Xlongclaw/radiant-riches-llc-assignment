"use client";
import { BUILDERS_DATA } from "@constants";
import BuilderWrapper from "../BuilderWrapper/BuilderWrapper";
import styles from "./BuilderContainer.module.scss";

const BuilderContainer = () => {
  return (
    <div className={styles.container}>
      {BUILDERS_DATA.map((builder, i) => (
        <BuilderWrapper key={`BUILDER_${i}`} type="normal" data={builder} />
      ))}
    </div>
  );
};

export default BuilderContainer;
