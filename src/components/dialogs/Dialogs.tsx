import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import { dDType, mDType } from "../../redux/state";

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

type MessageType = {
  text: string;
  id: number
};

const Message = (props: MessageType) => {
  return <div className={s.message}>{props.text}</div>;
};

type DialogsType = {
  mD:Array<mDType>;
  dD:Array<dDType>;
}

export const Dialogs = (props:DialogsType) => {

  // const dialogsDate = [
  //   { id: 1, name: "Michael Jordan" },
  //   { id: 2, name: "Tyrese John Haliburton" },
  //   { id: 3, name: "Domantas Sabonis" },
  // ];
  // const messegesDate = [
  //   { id: 1, msg: "Hi!!!" },
  //   { id: 2, msg: "Indiana GoOO!" },
  //   { id: 3, msg: "King's NBA is Sacramento" },
  // ];

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
