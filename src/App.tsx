import React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { SideBar } from "./components/sidebar/SideBar";
import { Profile } from "./components/profile/Profile";
import { Dialogs } from "./components/dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import { News } from "./components/news/News";
import { Music } from "./components/music/Music";
import { Settings } from "./components/settings/Settings";

const dialogsDate = [
  { id: 1, name: "Michael Jordan" },
  { id: 2, name: "Tyrese John Haliburton" },
  { id: 3, name: "Domantas Sabonis" },
];
const messegesDate = [
  { id: 1, msg: "Hi!!!" },
  { id: 2, msg: "Indiana GoOO!" },
  { id: 3, msg: "King's NBA is Sacramento" },
];

const forDialogs = () => {
  return(<Dialogs mD={messegesDate} dD={dialogsDate} />)
}

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrappper">
        <Header />
        <SideBar />
        <div className="app-wrappper-content">
          <Route
            path="/dialogs"
            component={forDialogs}
          />
          <Route path="/profile" component={Profile} />
          <Route path="/news" render={News} />
          <Route path="/playlist" render={Music} />
          <Route path="/settings" render={() => {return <Settings />}} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
