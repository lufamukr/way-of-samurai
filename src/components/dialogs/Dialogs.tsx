import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

export const Dialogs = () => {
  
  return (
    <div>
      <h2 className={s.title}>Dialogs</h2>

      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          <div className={s.dialogItem + ' ' + s.active}>
             <NavLink to="/dialogs/1">Michael Jordan</NavLink>
            </div>
          <div className={s.dialogItem}>
            <NavLink to="/dialogs/2">Tyrese John Haliburton</NavLink>
            </div>
          <div className={s.dialogItem}>
            <NavLink to="/dialogs/3">Domantas Sabonis</NavLink>
            </div>
        </div>

        <div className={s.messages}>
          <div className={s.message}>Hi!!!</div>
          <div className={s.message}>Indiana GoOO!</div>
          <div className={s.message}>King's NBA is Sacramento</div>
        </div>
      </div>
    </div>
  );
};
