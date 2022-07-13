import React from "react";
import Top from "./components/Top";
import Middle from "./components/Middle";
import Bottom from "./components/Bottom";

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
      <Bottom>
        <img src="https://nationaltoday.com/wp-content/uploads/2021/04/Fitness-Day-.jpg" alt="Fit People"/>
      </Bottom>
    </div>
  );
}

export default App;
