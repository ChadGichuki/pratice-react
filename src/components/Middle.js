// Understanding lists and keys

// Use an array method like .map to loop through an array and return JSX for each element of the array

// It will work but you get a warning sign. You need to assign unique keys.

import React from "react";
import Task from "./Task"

const tasks = [
    {
        task: "Wash the dishes", place: "My kitchen", time: "6pm"
    },
    {
        task: "Watch the debate", place: "My Living room", time: "8pm"
    },
    {
        task: "Workout", place: "local gym", time: "4pm"
    },
    {
        task: "Take a nap", place: "Anywhere really", time: "1:30pm"
    },
    {
        task: "Meet the investors", place: "The Library, Sarit", time: "10am"
    }
]

function Middle(){
    return(
        <ul id="middle">
            {tasks.map(task => {
                return <Task key={task.task} task={task.task} place={task.place} time={task.time}/>
            })}
        </ul>
    )
}

export default Middle