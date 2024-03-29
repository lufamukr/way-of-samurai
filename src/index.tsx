import ReactDOM from "react-dom";
import "./index.css";
import { store } from "./redux/state";
import App from "./App";

export const rerenderTree = () => {
  ReactDOM.render(
    <App appState={store.getState()} addPostInApp={store.addPost.bind(store)} updatePostText={store.updatePostText.bind(store)}/>,
    document.getElementById("root")
  );
};

rerenderTree();
store.subscriber(rerenderTree)