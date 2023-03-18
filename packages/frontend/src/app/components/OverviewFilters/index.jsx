import React from "react";
import c from "classnames";

import RouteData from "../../../MockedData/routeData.json";

import style from "./style.module.css";

const OverviewFilters = () => {
  return (
    <div className={style.container}>
      <select className={c(style.select, style.filterItem)} name="" id="">
        <option value={null}>Start Address</option>
        {RouteData.map((route, i) => (
          <option key={`${route.id}-${i}`} value={route.id}>{route.startAddress}</option>
        ))}
      </select>

      <select className={c(style.select, style.filterItem)} name="" id="">
        <option value={null}>End Address</option>
        {RouteData.map((route, i) => (
          <option key={`${route.id}-${i}`} value={route.id}>{route.endAddress}</option>
        ))}
      </select>

      <button className={c(style.button, style.filterItem)}>Calculate</button>
    </div>
  );
};

export default OverviewFilters;
