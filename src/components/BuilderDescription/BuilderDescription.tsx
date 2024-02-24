import styles from "./BuilderDescription.module.scss";
const BuilderDescription = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className={styles.container}>
      <span className={styles.titleText}>{title} - </span>
      <span className={styles.description}>{description}</span>
    </div>
  );
};

export default BuilderDescription;
