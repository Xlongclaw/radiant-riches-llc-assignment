"use client";
import { RELATED_DEALS } from "@/constants";
import styles from "./RelatedDealsContainer.module.scss";
import BuilderWrapper from "../BuilderWrapper/BuilderWrapper";
const RelatedDealsContainer = () => {
  return (
    <div className={styles.container}>
      {RELATED_DEALS.map((deal, i) => (
        <BuilderWrapper key={`DEAL_${i}`} type="compact" data={deal} />
      ))}
    </div>
  );
};

export default RelatedDealsContainer;
