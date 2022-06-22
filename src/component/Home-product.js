import React from "react";
import { SuitHeart } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import styles from "./Home-product.module.css";

export default function HomeProduct({
  id,
  title,
  image,
  reviewDate,
  review,
  reviewer,
}) {
  return (
    <div className={styles.home_product}>
      <img className={styles.home_productImg} src={image} alt="product" />
      <div>
        <div>
          <Link to="/product">
            <h4 className={styles.product_title}>{title}</h4>
          </Link>
        </div>
        <div>
          <h6 className={styles.product_description}>{review}</h6>
        </div>

        <div className={styles.product_favorite}>
          <SuitHeart className={styles.product_favoriteHaert} />
        </div>
      </div>
      <div className={styles.product_footer}>
        <div className={styles.product_container}>
          <div>
            <span className={styles.product_reviewDate}>{reviewDate}</span>
          </div>
          <div>
            <span>by</span>
            <span className={styles.product_reviewer}>{reviewer}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
