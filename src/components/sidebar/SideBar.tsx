import React from "react";
import st from './SideBar.module.css';

export const SideBar = () => {
  return(
    <nav className={st.nav}>
    <ul>
      <li className={st.item}>
        <a href="#">Messages</a>
      </li>
      <li className={st.item}>
        <a href="#">News</a>
      </li>
      <li className={st.item}>
        <a href="#">Music</a>
      </li>
      <li className={st.item}>
        <a href="#">Settings</a>
      </li>
    </ul>
  </nav>
  )
}