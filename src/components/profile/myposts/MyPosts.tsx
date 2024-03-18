import React from "react";
import st from "./MyPosts.module.css";
import { Post } from "./post/Post";
import { PostDateType } from "../../../redux/state";

type MyPostsType = {
  postDa: Array<PostDateType>;
}

export const MyPosts = (props:MyPostsType) => {

  return (
    <div className={st.posts}>
      <h2 className={st.title}>My Posts</h2>
      <div className={st.boxNewMsg}>
        <textarea rows={5} cols={30} autoFocus></textarea>
        <button>New Post</button>
      </div>
      <h2>Old Post</h2>

      {props.postDa.map((p) => { return <Post msg={p.postName} likeValue={p.likeCount} />;})}

    </div>
  );
};
