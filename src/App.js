import React from "react";
import Top from "./components/Top";
import Middle from "./components/Middle";
import Bottom from "./components/Bottom";
import Bigbutton from "./components/Bigbutton";

function App() {
  return (
    <div className="App">
      <Top user="Richie" slogan="Wueh!!"/>
      <Middle/>
    </div>
  );
}

export default App;
