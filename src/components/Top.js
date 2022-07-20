
import React from "react";

function Top({
    user, 
    slogan = "Wueh!!"
}){
    return(
        <div id="top">
            <h1>TO DO LIST</h1>
            <p>Welcome {user}.</p>
            <p>And always remember: {slogan}</p>
        </div>
    )
}

export default Top