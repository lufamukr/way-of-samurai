import React from "react";
import { MyPosts } from "./myposts/MyPosts";
import { ProfileInfo } from "../profile/profileInfo/ProfileInfo";
import { PostDateType } from "../../redux/state";

type ProfileType = {
  postData: Array<PostDateType>;
  addPostInProfile:() => void;
  newPostText: string;
  updatePostText: (postMessage:string) => void;
};

export const Profile = (props: ProfileType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postDa={props.postData} addPostInMyPosts={props.addPostInProfile} newPostText={props.newPostText} updatePostText={props.updatePostText}/>
    </div>
  );
};
