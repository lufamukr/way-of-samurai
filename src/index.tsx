import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { state } from "./redux/state"; 



type InpostDateType = {
  likeCount: number;
  postName: string;
};

export type PostDateType = {
  postDat: Array<InpostDateType>;
};

const postDate = [
  { likeCount: 100, postName: "Hi! Do you watch NBA games?" },
  { likeCount: 2, postName: "Denver - future champ!?" },
];

ReactDOM.render(
  <App
    appState={state}
  />,
  document.getElementById("root")
);
