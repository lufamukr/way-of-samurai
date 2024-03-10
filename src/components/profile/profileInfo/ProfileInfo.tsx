import React from "react";
import st from "../Profile.module.css";
import inProfile from "../../../img/forest-cat.jpeg"

export const ProfileInfo = () => {
  return (
    <div className={st.profileInfo}>
      <img
        className={st.profileBox_image}
        src={inProfile}
        alt="cover"
      />
    </div>
  );
};