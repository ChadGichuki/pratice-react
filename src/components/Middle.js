// Understanding lists and keys
// Lists help us create ordered elements in a dynamic manner so that we don't add new elements through hard coding.
// We create a list by transforming array items into an array of jsx elements.

// Use JavaScript array method like .map method to do the transformation.
// 3 reasons why:
//      1) Create a new array fom calling a function for each array item or element.
//      2) Method does not mutate the original array.
//      3) Calls a funtion for each element in the array only once.
//
// JSX is still javaScript so we can use the .map method for working with arrays in vanilla JS

// Example:

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

// Exporting without a unique key will work but you get a warning sign. 
// The special key allows react to internally keep track of changes to each element in our new array of JSX.

// In our example: We use task as the key

// For example: You don't need to hardcode; We can add a new task to the array.