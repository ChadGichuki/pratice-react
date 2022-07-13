import React from "react";

function Task({task, place, time}){
    return(
        <li>{task}  ||  {place}  ||  {time}</li>
    )
}

export default Task