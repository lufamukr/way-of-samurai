import React from "react";
import { MyPosts } from "./myposts/MyPosts";
import { ProfileInfo } from "../profile/profileInfo/ProfileInfo";
import { PostDateType } from "../../redux/state";

type ProfileType = {
  postData: Array<PostDateType>;
};

export const Profile = (props: ProfileType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postDa={props.postData} />
    </div>
  );
};
