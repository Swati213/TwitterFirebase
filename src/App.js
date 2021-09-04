
import './App.css';
import React from 'react'
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

function App() {
  return (
   <div>
   <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>

    </div>
  );
}

export default App;
