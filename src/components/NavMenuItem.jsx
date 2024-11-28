import React from "react";

const NavMenuItem = ({ className = "", title = "Title" ,active=false, onClick=()=>{} }) => {
  return (
    <div className={`${active?'active__item':''} nav__title  `} onClick={onClick}>
      <i className={`uil  ${className} nav__icon`}></i>
      <p>{title}</p>
    </div>
  );
};

export default NavMenuItem;
