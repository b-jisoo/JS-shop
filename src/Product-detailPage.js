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
        productInfo="등판과 방석의 우레탄 쿠션으로 오랜시간 앉아있어도 피로감이 덜하고 다양한 컬러로 주변환경 및 취향에 맞는 컬러를 선택 가능하여, 건강과 센스있는 인테리어 효과도 누릴수 있습니다"
        productId="1234567"
      />
    </>
  );
}
