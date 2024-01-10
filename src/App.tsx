import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { Profile } from './components/Profile';

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



