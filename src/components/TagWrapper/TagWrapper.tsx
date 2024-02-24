import styles from "./TagWrapper.module.scss";

const TagWrapper = ({ title }: { title: string }) => {
  return <div className={styles.tag}>{title}</div>;
};

export default TagWrapper;
