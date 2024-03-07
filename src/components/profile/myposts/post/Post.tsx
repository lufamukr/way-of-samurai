import React from "react";
import st from "./Post.module.css";

type TypeProps = {
  msg: string;
  likeValue: number;
}

export const Post = (props: TypeProps) => {
  return (
    <div className={st.new}>
      <img className={st.ava} src="https://images.unsplash.com/photo-1579487685737-e435a87b2518?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="avatar" />
      <span>{props.msg}</span>
      <div className={st.like}>{props.likeValue} Like</div>
    </div>
  )
}

