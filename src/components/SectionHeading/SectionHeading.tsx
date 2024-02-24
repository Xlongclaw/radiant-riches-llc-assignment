import styles from "./SectionHeading.module.scss";

const SectionHeading = ({ title }: { title: string }) => {
  return <h2 className={styles.heading}>{title}</h2>;
};

export default SectionHeading;
