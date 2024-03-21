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
import { ObjectAppStateType, updatePostText } from "./redux/state";


type AppType = {
  appState:ObjectAppStateType;
  addPostInApp: ()=> void;
  updatePostText: (postMessage:string) => void;
};

const App: React.FC<AppType> = (props) => {
  const neJsxAFuncCompon = () => {
    return <Dialogs mD={props.appState.dialogsPage.messegesDate} dD={props.appState.dialogsPage.dialogsDate} />;
  };

  const neJsxAFuncComponProfile = () => {
    return <Profile postData={props.appState.profilePage.postDate} addPostInProfile={props.addPostInApp} newPostText={props.appState.profilePage.newPostText} updatePostText={updatePostText}/>;
  };

  return (
    <BrowserRouter>
      <div className="app-wrappper">
        <Header />
        <SideBar sideBar={props.appState.sideBarPage}/>
        <div className="app-wrappper-content">
          <Route path="/dialogs" component={neJsxAFuncCompon} />
          <Route path="/profile" component={neJsxAFuncComponProfile} />
          <Route path="/news" render={News} />
          <Route path="/playlist" render={Music} />
          <Route
            path="/settings"
            render={() => {
              return <Settings />;
            }}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
