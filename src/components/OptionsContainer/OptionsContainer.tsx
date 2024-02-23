import { OPTIONS } from "@constants";
import styles from "./OptionsContainer.module.scss";

const OptionsContainer = () => {
  return (
    <div className={styles.container}>
      {OPTIONS.map((option, i) => (
        <div key={`OPTION_${i}`} className={styles.option}>
          {option.title}
        </div>
      ))}
    </div>
  );
};

export default OptionsContainer;
