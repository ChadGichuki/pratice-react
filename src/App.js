import React from "react";
import Top from "./components/Top";
import Middle from "./components/Middle";
import Bottom from "./components/Bottom";
//import Bigbutton from "./components/Bigbutton";

function App() {
  return (
    <div className="App">
      <Top user="Richie"/>
      <Middle/>
      <br/>
      <Bottom>
        <img src="https://nnmedia.nation.africa/uploads/2022/07/Sakaja-Igathe-2-1320x740.jpg" alt="Sakaja and Igathe"/>
      </Bottom>
      <Bottom>
        <p>Something Unique</p>
        <p>Something Unique</p>
        <p>Something Unique</p>
        <p>Something Unique</p>
        <p>Something Unique</p>
      </Bottom>
      {/*<Bottom>
          <Bigbutton/>
        </Bottom>*/}
    </div>
  );
}

export default App;
