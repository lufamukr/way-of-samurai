import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import { dDType, mDType } from "../../redux/state";
import { Message } from "./messages/Message";

type DialogItemType = {
  name: string;
  id: number;
};

const DialogItem = (props: DialogItemType) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialogItem + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

type DialogsType = {
  mD:Array<mDType>;
  dD:Array<dDType>;
}

export const Dialogs = (props:DialogsType) => {

  return (
    <div>
      <h2 className={s.title}>Dialogs</h2>

      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {
            props.dD.map((d) => {
              return(
                <DialogItem name={d.name} id={d.id} />
              )
            })
          }
        </div>

        <div className={s.messages}>
          {
            props.mD.map((msg) => {
              return(
                <Message text={msg.msg} id={msg.id}/>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};
