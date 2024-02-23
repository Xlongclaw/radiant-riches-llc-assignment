"use client";
import { DETAILS_DATA } from "@/constants";
import styles from "./ResultDetailsStrip.module.scss";
import { DetailContainer, SortMenu } from "@components";
const ResultDetailsStrip = () => {
  return (
    <div className={styles.strip}>
      <div className={styles.leftContainer}>
        {DETAILS_DATA.map((detail, i) => (
          <DetailContainer key={`DETAIL_CONTAINER_${i}`} detail={detail} />
        ))}
      </div>
      <SortMenu />
    </div>
  );
};

export default ResultDetailsStrip;
