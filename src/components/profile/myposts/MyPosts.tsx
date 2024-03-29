import React, { ChangeEvent } from "react";
import st from "./MyPosts.module.css";
import { Post } from "./post/Post";
import { PostDateType } from "../../../redux/state";

type MyPostsType = {
  postDa: Array<PostDateType>;
  addPostInMyPosts: () => void;
  newPostText: string;
  updatePostText: (postMessage: string) => void;
};

export const MyPosts = (props: MyPostsType) => {

  let addNewPost = () => {
    props.addPostInMyPosts();
  };

  const onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
    let postText = e.currentTarget.value;
    if(postText !== undefined) {
      props.updatePostText(postText);
    } 
  };

  return (
    <div className={st.posts}>
      <h2 className={st.title}>My Posts</h2>
      <div className={st.boxNewMsg}>
        <textarea
          rows={5}
          cols={30}
          onChange={onPostChange}
          value={props.newPostText}
        />

        <button onClick={addNewPost}>New Post</button>
      </div>
      <h2>Old Post</h2>

      {props.postDa.map((p) => {
        return <Post msg={p.postName} likeValue={p.likeCount} />;
      })}
    </div>
  );
};
