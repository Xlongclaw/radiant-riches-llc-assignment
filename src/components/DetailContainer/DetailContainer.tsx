"use client";
import { detailType } from "@types";
import styles from "./DetailContainer.module.scss";
import Image from "next/image";

const DetailContainer = ({ detail }: { detail: detailType }) => {
  return (
    <div className={styles.container}>
      <Image src={detail.icon} alt="" />
      {detail.title}
      {detail.value !== undefined && ` - ${detail.value}`}
    </div>
  );
};

export default DetailContainer;
