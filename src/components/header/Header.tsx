import React from "react";
import st from './Header.module.css';

export const Header = () => {
  return (
    <header className={st.header}>
      <img
        src="https://images.vexels.com/media/users/3/229860/isolated/preview/4150b92a9dad18155e7c57b832cf8702-male-basketball-player-shoot-cut-out.png"
        alt="logo"
      />
    </header>
  );
};
