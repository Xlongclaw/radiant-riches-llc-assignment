import { LinkListItemType } from "@/types";
import styles from "./LinkList.module.scss";

const LinkList = ({ data }: { data: LinkListItemType }) => {
  return (
    <div className={styles.list}>
      <h2>{data.title}</h2>
      {data.links.map((link, i) => (
        <h3 key={`LINK_${i}`}>{link.title}</h3>
      ))}
    </div>
  );
};

export default LinkList;
