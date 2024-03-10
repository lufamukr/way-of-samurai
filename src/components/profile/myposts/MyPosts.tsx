import React from "react";
import st from "./MyPosts.module.css";
import { Post } from "./post/Post";

export const MyPosts = () => {
  const postDate = [
    { likeCount: 100, postName: "Hi! Do you watch NBA games?" },
    { likeCount: 2, postName: "Denver - future champ!?" },
  ];

  return (
    <div className={st.posts}>
      <h2 className={st.title}>My Posts</h2>
      <div className={st.boxNewMsg}>
        <textarea rows={5} cols={30} autoFocus></textarea>
        <button>New Post</button>
      </div>
      <h2>Old Post</h2>

      {postDate.map((p) => { return <Post msg={p.postName} likeValue={p.likeCount} />;})}

    </div>
  );
};
