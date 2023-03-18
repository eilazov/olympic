import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/images/logo.svg";
import style from "./style.module.css";

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.logoWrapper}>
        <img src={Logo} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
