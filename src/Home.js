import React from "react";
import HomeProduct from "./component/Home-product";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.home_productList}>
        <HomeProduct />
        <HomeProduct />
        <HomeProduct />
        <HomeProduct />
        <HomeProduct />
        <HomeProduct />
        <HomeProduct />
        <HomeProduct />
      </div>
      <div className={styles.homeFooter}>
        {/* TODO 여기는 페이지 표시하는 공간 */}
      </div>
    </div>
  );
}
