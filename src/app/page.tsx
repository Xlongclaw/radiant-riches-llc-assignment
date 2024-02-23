import styles from "@/app/styles.module.scss";
import { MainContainer, NavigationBar } from "@components";
import React from "react";

const page = () => {
  return (
    <div className={styles.app}>
      <NavigationBar />
      <MainContainer />
    </div>
  );
};

export default page;
