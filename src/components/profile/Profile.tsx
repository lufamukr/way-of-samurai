import React from "react";
import st from './Profile.module.css';
import { MyPosts } from "./myposts/MyPosts";


export const Profile = () => {
  return (
    <div>
      <div>
        <img className={st.profileBox_image}
          src="https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="cover"
        />
      </div>
      <MyPosts />
    </div>
  );
};
