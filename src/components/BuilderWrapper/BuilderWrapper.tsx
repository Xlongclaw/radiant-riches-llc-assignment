"use client";
import {
  BuilderDescription,
  Button,
  ImageContainer,
  MainHighLight,
  RatingContainer,
} from "@components";
import styles from "./BuilderWrapper.module.scss";

const BuilderWrapper = ({ type }: { type: "compact" | "normal" }) => {
  if (type == "normal")
    return (
      <div className={styles.wrapper}>
        <ImageContainer />
        <div className={styles.textContainer}>
          <BuilderDescription />
          <MainHighLight />
        </div>
        <div className={styles.rightContainer}>
          <RatingContainer />
          <Button />
        </div>
      </div>
    );
  return <div className={styles.wrapperCompact}></div>;
};

export default BuilderWrapper;
