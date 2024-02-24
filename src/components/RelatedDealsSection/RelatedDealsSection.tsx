import RelatedDealsContainer from "../RelatedDealsContainer/RelatedDealsContainer";
import { SectionHeading } from "@components";
import styles from "./RelatedDeals.module.scss";

const RelatedDealsSection = () => {
  return (
    <div className={styles.section}>
      <SectionHeading title="Related deals you might like for" />
      <RelatedDealsContainer />
    </div>
  );
};

export default RelatedDealsSection;
