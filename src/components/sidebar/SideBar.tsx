import React from "react";
import st from "./SideBar.module.css";
import { NavLink } from "react-router-dom";
import { Friends } from "../friends/Friends";
import { SideBarPageType } from "../../redux/state";

type SideBarType = {
  sideBar: SideBarPageType;
}

export const SideBar:React.FC<SideBarType> = (props) => {
  return (
    <nav className={st.nav}>
      <ul>
        <li className={st.item}>
          <NavLink to="/profile" activeClassName={st.active}>Profile</NavLink>
        </li>
        <li className={st.item}>
          <NavLink to="/dialogs" activeClassName={st.active}>Messages</NavLink>
        </li>
        <li className={st.item}>
          <NavLink to="/news" activeClassName={st.active}>News</NavLink>
        </li>
        <li className={st.item}>
          <NavLink to="/playlist" activeClassName={st.active}>Music</NavLink>
        </li>
        <li className={st.item}>
          <NavLink to="/settings" activeClassName={st.active}>Settings</NavLink>
        </li>
      </ul>
      <Friends friends={props.sideBar.friends}/>
    </nav>
  );
};
