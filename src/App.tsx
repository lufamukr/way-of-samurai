import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { SideBar } from './components/sidebar/SideBar';
import { Profile } from './components/profile/Profile';

const App = () => {
  return (
    <div className="app-wrappper">
      <Header />
      <SideBar />
      <Profile />
    </div>
  );
}

export default App;



