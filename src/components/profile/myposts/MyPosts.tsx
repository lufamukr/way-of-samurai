import React from "react";
import st from "./MyPosts.module.css";
import { Post } from "./post/Post";

export const MyPosts = () => {
  return (
    <div className={st.posts}>
      My Posts
      <div>Old Post</div>
      <Post msg="Hi! Do you watch NBA games" likeValue={15}/>
      <Post msg="Yes of course" likeValue={20}/>
    </div>
  );
};
