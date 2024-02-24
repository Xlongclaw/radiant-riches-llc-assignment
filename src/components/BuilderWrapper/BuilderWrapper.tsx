"use client";
import {
  BuilderDescription,
  Button,
  ImageContainer,
  MainHighLight,
  PriceContainer,
  RatingContainer,
  TagWrapper,
} from "@components";
import styles from "./BuilderWrapper.module.scss";
import { BuilderDataType } from "@types";
import Image from "next/image";

const BuilderWrapper = ({
  type,
  data,
}: {
  type: "compact" | "normal";
  data: BuilderDataType;
}) => {
  if (type == "normal")
    // NORMAL BUILDER WRAPPER
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
  // COMPACT BUILDER WRAPPER
  return (
    <div className={styles.wrapperCompact}>
      <Image className={styles.image} src={data.image} alt="" />
      <div className={styles.tagContainer}>
        {data.tags?.map((tag, i) => (
          <TagWrapper key={`TAG_${i}`} title={tag} />
        ))}
      </div>
      <h3>{data.imageTag}</h3>
      <h4>{data.name}</h4>
      <PriceContainer price={data.price!} discount={data.discount!} />
      <Button title="View Deal" />
    </div>
  );
};

export default BuilderWrapper;
