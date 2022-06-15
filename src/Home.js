import React from "react";
import HomeProduct from "./component/Home-product";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.home_productList}>
        <HomeProduct
          id="1234"
          title="쿠시 코코 화이트 발받침/책상의자/학생의자/사무의자"
          image="./product1.jpg"
          review="어른이 앉아도 너무 안정되고 편합니다."
          reviewDate="2022-06-15"
          reviewer="Test1"
        />
        <HomeProduct
          id="1234"
          title="쿠시 코코 화이트 발받침/책상의자/학생의자/사무의자"
          image="./product1.jpg"
          review="어른이 앉아도 너무 안정되고 편합니다."
          reviewDate="2022-06-15"
          reviewer="Test1"
        />
        <HomeProduct
          id="1234"
          title="쿠시 코코 화이트 발받침/책상의자/학생의자/사무의자"
          image="./product1.jpg"
          review="어른이 앉아도 너무 안정되고 편합니다."
          reviewDate="2022-06-15"
          reviewer="Test1"
        />
        <HomeProduct
          id="1234"
          title="쿠시 코코 화이트 발받침/책상의자/학생의자/사무의자"
          image="./product1.jpg"
          review="어른이 앉아도 너무 안정되고 편합니다."
          reviewDate="2022-06-15"
          reviewer="Test1"
        />
        <HomeProduct
          id="1234"
          title="쿠시 코코 화이트 발받침/책상의자/학생의자/사무의자"
          image="./product1.jpg"
          review="어른이 앉아도 너무 안정되고 편합니다."
          reviewDate="2022-06-15"
          reviewer="Test1"
        />
        <HomeProduct
          id="1234"
          title="쿠시 코코 화이트 발받침/책상의자/학생의자/사무의자"
          image="./product1.jpg"
          review="어른이 앉아도 너무 안정되고 편합니다."
          reviewDate="2022-06-15"
          reviewer="Test1"
        />
        <HomeProduct
          id="1234"
          title="쿠시 코코 화이트 발받침/책상의자/학생의자/사무의자"
          image="./product1.jpg"
          review="어른이 앉아도 너무 안정되고 편합니다."
          reviewDate="2022-06-15"
          reviewer="Test1"
        />
        <HomeProduct
          id="1234"
          title="쿠시 코코 화이트 발받침/책상의자/학생의자/사무의자"
          image="./product1.jpg"
          review="어른이 앉아도 너무 안정되고 편합니다."
          reviewDate="2022-06-15"
          reviewer="Test1"
        />
      </div>
      <div className={styles.homeFooter}>
        {/* TODO 여기는 페이지 표시하는 공간 */}
      </div>
    </div>
  );
}
