import React from "react";
import st from './Profile.module.css';
import { MyPosts } from "./myposts/MyPosts";


export const Profile = () => {
  return (
    <div className={st.content}>
      <div>
        <img
          src="https://www.kindpng.com/picc/m/168-1687901_jimmy-butler-png-chicago-bulls-players-png-transparent.png"
          alt="11"
        />
      </div>
      <MyPosts />
    </div>
  );
};
