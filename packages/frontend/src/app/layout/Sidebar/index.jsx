import React from 'react'
import { NavLink } from 'react-router-dom'
import  style from  "./style.module.css"

const Sidebar = () => {
  return (
    <div className={style.container}>
        <NavLink to={"/"}>Traffic</NavLink>
        <NavLink to={"/overview"}>Overview</NavLink>
        <NavLink to={"/csv"}>CSV</NavLink>
    </div>
  )
}

export default Sidebar