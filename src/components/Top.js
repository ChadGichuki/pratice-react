//Understanding props

// props are objects
// const props = {
//  user: "usernName from parent",
//  slogan: "slogan from parent"
//}

// destructuring
// default values

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