import React from "react";
import st from "./Post.module.css";
import ava from "../../../../img/user1.jpeg"

type TypeProps = {
  msg: string;
  likeValue: number;
}

export const Post = (props: TypeProps) => {

  return (
    <div className={st.new}>
      <img className={st.ava} src={ava} alt="avatar" />
      <span>{props.msg}</span>
      <div className={st.like}>{props.likeValue} Like</div>
    </div>
  )
}

