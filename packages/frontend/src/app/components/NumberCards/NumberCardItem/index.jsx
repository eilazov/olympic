import React from "react";
import style from "./style.module.css";

const NumberCardItems = ({ label, startValue, endValue = null }) => {
  return (
    <div className={style.container}>
      <div className={style.title}>{label}</div>
      {startValue && endValue ? (
        <div className={style.valueWrapper}>
          From
          <span className={style.value}>{startValue}</span> - To{" "}
          <span className={style.value}>{endValue}</span>
        </div>
      ) : (
        <span className={style.value}>{startValue}</span>
      )}
    </div>
  );
};

export default NumberCardItems;
