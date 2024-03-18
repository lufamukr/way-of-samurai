import React from "react";
import { FriendsType } from "../../redux/state";
import st from "./Friends.module.css";

type FriendsCType = {
  friends: Array<FriendsType>;
};

export const Friends = (props: FriendsCType) => {
  return (
    <div>
      <h3>Friends</h3>
      <ul>
        {props.friends.map((m) => {
          return (
            <li key={m.id}>
              <img src={m.avatar} alt={m.name} className={st.avatarImg} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
