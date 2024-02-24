"use client";
import {
  BuilderDescription,
  Button,
  ImageContainer,
  MainHighLight,
  RatingContainer,
} from "@components";
import styles from "./BuilderWrapper.module.scss";
import { BuilderDataType } from "@types";

const BuilderWrapper = ({
  type,
  data,
}: {
  type: "compact" | "normal";
  data: BuilderDataType;
}) => {
  if (type == "normal")
    return (
      <div className={styles.wrapper}>
        <ImageContainer image={data.image} imageTag={data.imageTag!} />
        <div className={styles.textContainer}>
          <BuilderDescription
            description={data.description!}
            title={data.name}
          />
          <MainHighLight
            mainHighlight={data.mainHighlight}
            mainHighlightList={data.mainHighlightList}
            whyLove={data.whylove}
          />
        </div>
        <div className={styles.rightContainer}>
          <RatingContainer rating={data.rating!} tags={data.tags!} />
          <Button title="View" />
        </div>
        <div className={styles.sequenceIndicator}>{data.sequence}</div>
      </div>
    );
  return <div className={styles.wrapperCompact}></div>;
};

export default BuilderWrapper;
