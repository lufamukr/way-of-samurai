import React from "react";
import st from "./Profile.module.css";
import { MyPosts } from "./myposts/MyPosts";
import { ProfileInfo } from "../profile/profileInfo/ProfileInfo";


export const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};
