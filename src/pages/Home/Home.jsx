import React from "react";
import Header from "../../components/Header/Header";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <div className={styles.contentContainer}>
        <div className={styles.startContainer}>
          <div className={styles.logoContainer}>
            <div>dasdsda</div>
          </div>
          <div className={styles.infoContainer}>asdasds</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
