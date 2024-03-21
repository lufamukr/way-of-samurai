import "./index.css";
import { state } from "./redux/state";
import { rerenderTree } from "./Render";

rerenderTree(state);