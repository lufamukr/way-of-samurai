import React from "react";
import st from './Header.module.css';
import logo from "../../img/logo.jpeg"

export const Header = () => {
  return (
    <header className={st.header}>
      <img
        src={logo}
        alt="logo"
      />
    </header>
  );
};
