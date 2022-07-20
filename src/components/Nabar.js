import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <div>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/tasks">Tasks</NavLink>
        </div>
    )
}

export default Navbar