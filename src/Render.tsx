import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ObjectAppStateType, addPost, updatePostText } from "./redux/state";


export const rerenderTree = (state:ObjectAppStateType) => {
  ReactDOM.render(
    <App appState={state} addPostInApp={addPost} updatePostText={updatePostText}/>,
    document.getElementById("root")
  );
};
