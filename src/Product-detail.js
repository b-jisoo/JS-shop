import React from "react";
import styles from "./Product-detail.module.css";
import { PlusCircle, DashCircle } from "react-bootstrap-icons";
import ButtonGradient from "./component/ButtonGradient";

export default function ProductDetail(props) {
  const {
    productName,
    productPrice,
    productImg,
    productBrand,
    productUnit,
    productInfo,
    productId,
  } = props;
  return (
    <div className={styles.wrap}>
      <div className={styles.product_info}>
        <div className={styles.product_image}>
          <img src={productImg} alt="" />
        </div>
        <div className={styles.product_descriptionContainer}>
          <div className={styles.product_name}>
            <p>{productName}</p>
          </div>
          <div className="product_indoDetail">
            <div className={styles.price}> {productPrice} 원</div>
            <div className="capsulePack">{productUnit}</div>
          </div>
          <p className={styles.productDescription}>{productInfo}</p>
          <div className={styles.plusminusBtn}>
            <PlusCircle className={styles.PlusCircle} />
            {/* {orderCnt}개 */} 1개
            <DashCircle className={styles.DashCircle} />
          </div>
          <div className={styles.product_descriptionContainer_Btn}>
            <ButtonGradient text="장바구니" color="" />
            <ButtonGradient text="구매" color="orange" />
          </div>
        </div>
      </div>
    </div>
  );
}
