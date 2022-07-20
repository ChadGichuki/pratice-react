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
    },
    {
        task: "Take a walk", place: "JSX Boulevard Street", time: "6pm"
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

