import { rerenderTree } from "../Render";
import user1 from "../img/user1.jpeg";
import user2 from "../img/user2.jpeg";

export type dDType = {
  id:number;
  name: string;
}

export type mDType = {
  id:number;
  msg: string;
}

export type PostDateType = {
  id:number;
  likeCount:number;
  postName:string;
}

export type FriendsType = {
  id:number;
  name:string;
  avatar:string;
}

export type DialogsPageType = {
  messegesDate: Array<mDType>;
  dialogsDate: Array<dDType>;
}

export type ProfilePageType = {
  postDate: Array<PostDateType>;
  newPostText: string;
}

export type SideBarPageType = {
  friends: Array<FriendsType>;
}

export type ObjectAppStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
  sideBarPage: SideBarPageType;
}

export let state:ObjectAppStateType = {
  profilePage: {
    postDate: [
      { likeCount: 100, postName: "Hi! Do you watch NBA games?",id: 1 },
      { likeCount: 2, postName: "Denver - future champ!?",id: 2 },
    ],
    newPostText: '123',
  },

  dialogsPage: {
    messegesDate: [
      { id: 1, msg: "Hi!!!" },
      { id: 2, msg: "Indiana GoOO!" },
      { id: 3, msg: "King's NBA is Sacramento" },
    ],
    dialogsDate: [
      { id: 1, name: "Michael Jordan" },
      { id: 2, name: "Tyrese John Haliburton" },
      { id: 3, name: "Domantas Sabonis" },
    ],
  },

  sideBarPage: {
    friends: [
      {id:1, name: "Frend 1", avatar: user1},
      {id:2, name: "Frend 2", avatar: user2},
    ]
  }
}

export const addPost = () => {
  let newPost = { id: 3, postName: state.profilePage.newPostText, likeCount: 0 };
  state.profilePage.postDate.push(newPost);
  state.profilePage.newPostText = '';
  rerenderTree(state)
}

export const updatePostText = (postMessage:string) => {
  state.profilePage.newPostText = postMessage;
  rerenderTree(state)
}