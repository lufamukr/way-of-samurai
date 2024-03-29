import user1 from "../img/user1.jpeg";
import user2 from "../img/user2.jpeg";

export type dDType = {
  id: number;
  name: string;
};

export type mDType = {
  id: number;
  msg: string;
};

export type PostDateType = {
  id: number;
  likeCount: number;
  postName: string;
};

export type FriendsType = {
  id: number;
  name: string;
  avatar: string;
};

export type DialogsPageType = {
  messegesDate: Array<mDType>;
  dialogsDate: Array<dDType>;
};

export type ProfilePageType = {
  postDate: Array<PostDateType>;
  newPostText: string;
};

export type SideBarPageType = {
  friends: Array<FriendsType>;
};

export type ObjectAppStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
  sideBarPage: SideBarPageType;
};

export type StoreType = {
  _state: ObjectAppStateType;
  getState: () => void;
  rerenderTree: () => void;
  addPost: () => void;
  updatePostText: (postMessage: string) => void;
  subscriber: (callback: (stat: ObjectAppStateType) => void) => void;
};

export let store = {
  _state: {
    profilePage: {
      postDate: [
        { likeCount: 100, postName: "Hi! Do you watch NBA games?", id: 1 },
        { likeCount: 2, postName: "Denver - future champ!?", id: 2 },
      ],
      newPostText: "Add your POST! !!",
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
        { id: 1, name: "Frend 1", avatar: user1 },
        { id: 2, name: "Frend 2", avatar: user2 },
      ],
    },
  },
  getState() {
    return this._state;
  },
  rerenderTree: () => {
    console.log("Hello World!");
  },
  addPost() {
    let newPost = {
      id: 3,
      postName: store._state.profilePage.newPostText,
      likeCount: 0,
    };
    store._state.profilePage.postDate.push(newPost);
    store._state.profilePage.newPostText = "";
    store.rerenderTree();
  },
  updatePostText: (postMessage: string) => {
    store._state.profilePage.newPostText = postMessage;
    store.rerenderTree();
  },
  subscriber: (callback: () => void) => {
    store.rerenderTree = callback;
  },
};
