import React from "react";
import "./ButtonGradient.css";

// 입력으로 text, color 받고 스타일 수정가능하게 만들어야함

export default function ButtonGradient(props) {
  return <button className={props.color}>{props.text}</button>;
}
