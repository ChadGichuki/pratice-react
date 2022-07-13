// When you have complex components, with varying children elements.
// children can be passed as the key to the props object.

// Then in App.js, you don't use the self closing tags. eg <Bottom/>
// You use the normal start and end tags eg. <Bottom></Bottom>

import React from "react";

function Bottom(props){
    return(
        <div id="bottom">
            {props.children}
        </div>

    )
}

export default Bottom