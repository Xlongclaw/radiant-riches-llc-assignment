import styles from "@/app/styles.module.scss";
import { Footer, MainContainer, NavigationBar } from "@components";
import React from "react";

const page = () => {
  return (
    <div className={styles.app}>
      <NavigationBar />
      <MainContainer />
      <Footer />
    </div>
  );
};

export default page;
