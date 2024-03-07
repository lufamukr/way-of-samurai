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

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrappper">
        <Header />
        <SideBar />
        <div className="app-wrappper-content">
          <Route path="/dialogs" component={Dialogs}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/news" component={News}/>
          <Route path="/playlist" component={Music}/>
          <Route path="/settings" component={Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
