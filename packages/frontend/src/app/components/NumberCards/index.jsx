import React from "react";
import NumberCardItems from "./NumberCardItem";

import style from "./style.module.css";

const NumberCards = ({ values }) => {
  return (
    <div className={style.container}>
      {values.map((item, i) => (
        <NumberCardItems
          key={`numbers-card-${i}`}
          label={item.label}
          startValue={item.startValue}
          endValue={item.endValue}
        />
      ))}
    </div>
  );
};

export default NumberCards;
