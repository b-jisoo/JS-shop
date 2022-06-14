import React from "react";
import { SuitHeart } from "react-bootstrap-icons";
import styles from "./Home-product.module.css";

export default function HomeProduct() {
  return (
    <div className={styles.home_product}>
      <img
        className={styles.home_productImg}
        src="./product1.jpg"
        alt="product"
      />
      <div>
        <div>
          <h4 className={styles.product_title}>
            쿠시 코코 화이트 발받침/책상의자/학생의자/사무의자
          </h4>
        </div>
        <div>
          <h6 className={styles.product_description}>
            어른이 앉아도 너무 안정되고 편합니다.
          </h6>
        </div>

        <div className={styles.product_favorite}>
          <SuitHeart className={styles.product_favoriteHaert} />
        </div>
      </div>
      <div className={styles.product_footer}>
        <div className={styles.product_container}>
          <div>
            <span className={styles.product_reviewDate}>2022-06-14</span>
          </div>
          <div>
            <span>by</span>
            <span className={styles.product_reviewer}>Test1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
