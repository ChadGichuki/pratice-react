// Children are components that inherit properties from parent components.
// We can use React children to compose multiple components together. 
// Eg. A div with the same class name, but different internal structure.

// When you have complex components, with varying children elements.
// children can be passed as the key to the props object.

//Go through the Bottom component:
//  passing props as usual
//  returning JSX which is one div, with an id of bottom.
//  within the div, we pass {props.children} 

//  Compare with Top.js (In Top.js we have actual tags so Top will always have the same children, unlike in Bottom.js)

// Then in App.js, you don't use the self closing tags. eg <Bottom/>
// You use the normal start and end tags eg. <Bottom></Bottom>

import React from "react";

function Bottom(props){
    return(
        <div class="bottom">
            {props.children}
        </div>

    )
}

export default Bottom