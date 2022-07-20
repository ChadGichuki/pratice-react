//Understanding props

// props - short for property
// Allow us to re-use components without creating new ones every time

// For example: Create a new user using top component. (Daniel, All will be well)

// props are objects with key and value pairs.
// const props = {
//  user: "usernName from parent",
//  slogan: "slogan from parent"
//  }

// import React from "react";

// function Top(props){
//     return(
//         <div id="top">
//             <h1>TO DO LIST</h1>
//             <p>Welcome {props.user}.</p>
//             <p>And always remember: {props.slogan}</p>
//         </div>
//     )
// }

// export default Top


// We can use destructuring syntax. Eg:
//      function Top(props){
//          {props.user}, {props.slogan}
//      }
// Allows us to use default values 



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