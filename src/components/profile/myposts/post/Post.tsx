import React from "react";
import st from "./Post.module.css";

type TypeProps = {
  msg: string;
  likeValue: number;
}

export const Post = (props: TypeProps) => {
  return (
    <div className={st.new}>
      <img className={st.ava} src="https://banner2.cleanpng.com/20190711/jto/kisspng-chicago-bulls-jimmy-butler-nba-basketball-boston-c-5d27a47357ffc8.0512366115628790913605.jpg" alt="avatar" />
      <span>{props.msg}</span>
      <div className={st.like}>{props.likeValue} Like</div>
    </div>
  )
}

