import React from "react";
import { NavLink } from "react-router-dom";
import style from "./style.module.css";
import { ReactComponent as IconOverview } from "../../../assets/images/icon-overview.svg";
import { ReactComponent as IconTraffic } from "../../../assets/images/icon-traffic.svg";
import { ReactComponent as IconCsv } from "../../../assets/images/icon-csv.svg";

const Sidebar = () => {
  return (
    <div className={style.container}>
      <div className={style.navLinkWrapper}>
        <NavLink to={"/"} className={style.navLink}>
          <div className={style.navLinkDecorator} />
          <IconTraffic className={style.navIcon} />
          Traffic
        </NavLink>
      </div>
      <div className={style.navLinkWrapper}>
        <NavLink to={"/overview"} className={style.navLink}>
          <div className={style.navLinkDecorator} />
          <IconOverview className={style.navIcon} />
          Overview
        </NavLink>
      </div>
      <div className={style.navLinkWrapper}>
        <NavLink to={"/csv"} className={style.navLink}>
          <div className={style.navLinkDecorator} />
          <IconCsv className={style.navIcon} />
          CSV
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
