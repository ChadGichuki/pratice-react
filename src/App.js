import React from "react";
import Top from "./components/Top";
import Middle from "./components/Middle";
import Navbar from "./components/Nabar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Top user="Richie" slogan="Wueh!!"/>}/>
        <Route path="/tasks" element={<Middle/>}/>
      </Routes>

    </div>
  );
}

export default App;
