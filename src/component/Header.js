import React from "react";
import "./Header.css";
import { Cart } from "react-bootstrap-icons";

export default function Header(props) {
  return (
    <div className="header">
      <div>
        <a href="#">
          <img className="header-logo" src="./logo-coffzag.png" alt="logo" />
        </a>
      </div>

      <div class="header-nav">
        {/* <div className="header-loginForm"></div>
          <div className="header_myAccount"></div> */}
        <div className="header-option">
          <span className="header-optionLineOne "></span>
          <span className="header-optionLineTwo">
            <a href="#" className="header-shoppingCartLink">
              <Cart className="header-shoppingCart" icon={Cart} color="black" />
              <div className="header-shoppingCartCount">0</div>
            </a>
          </span>
        </div>
        <div className="header-option">
          <span className="header-optionLineOne "></span>
          <span className="header-optionLineTwo">
            <a href="#">찜리스트</a>
          </span>
        </div>
        <div className="header-option">
          <span className="header-optionLineOne ">
            <a href="#">로그인</a>
          </span>
          <span className="header-optionLineTwo">
            <a href="#">구매목록</a>
          </span>
        </div>
        <div className="header-option">
          <span className="header-optionLineOne ">
            <a href="#">회원가입</a>
          </span>
          <span className="header-optionLineTwo">
            <a href="#">로그아웃</a>
          </span>
        </div>
      </div>
    </div>
  );
}
