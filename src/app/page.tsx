import styles from "@/app/styles.module.scss";
import { NavigationBar } from "@components";
import React from "react";

const page = () => {
  return (
    <div className={styles.app}>
      <NavigationBar />
    </div>
  );
};

export default page;
