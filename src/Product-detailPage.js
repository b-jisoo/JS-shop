import React from "react";
import ProductDetail from "./Product-detail";
import styles from "./Product-detailPage.module.css";

export default function ProductDetailPage() {
  return (
    <>
      <ProductDetail
        productName="쿠시 코코 화이트 발받침/책상의자/학생의자/사무의자"
        productImg="./product1.jpg"
        productPrice={500}
        productInfo="어른이 앉아도 너무 안정되고 편합니다."
        productId="1234567"
      />
    </>
  );
}
