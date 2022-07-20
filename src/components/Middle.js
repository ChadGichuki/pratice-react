import React, {useEffect, useState} from "react";
import Task from "./Task"

function Middle(){

    const [myTasks, setTasks] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/tasks")
        .then(res => res.json())
        .then(data => console.log(data.tasks))
    }, [])

    return(
        <ul id="middle">
            {myTasks.map(task => {
                return <Task key={task.task} task={task.task} place={task.place} time={task.time}/>
            })}
        </ul>
    )
}

export default Middle

