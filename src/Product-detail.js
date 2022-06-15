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
        <div className="product_image">
          <img src={productImg} alt="" />
        </div>
        <div>
          <div className="product_name">{productName}</div>
          <div className="product_indoDetail">
            <div className="price"> {productPrice} 원</div>
            <div className="capsulePack">{productUnit}</div>
          </div>
          <span className="productDescription">{productInfo}</span>
          <div className="plusminusBtn">
            <PlusCircle />
            {/* {orderCnt}개 */} 1개
            <DashCircle />
          </div>
          <div>
            <ButtonGradient />
            <ButtonGradient />
          </div>
        </div>
      </div>
    </div>
  );
}
