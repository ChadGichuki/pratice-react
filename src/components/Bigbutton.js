// State is dynamic data within your component. Easiest example is a counter.
// Remeber that props passed to your components are read only (Static)

// We use a react hook called useState. import { useState } from "react"

// When you call that useState hook, it gives you 2 variable to use: 
            //A count variable - reference to the current value of the state
            //A setter function - a function to change the state accordingly
        
            //const [count, setCount] = useState(0)   ---Remember destructuring syntax?

// The best way to implement this is by defining a new function within your component Eg.function handleClick()
// Inside this function, you invoke the setter function and update the count variable to the new value.
        // Eg. function handleClick(){
        //    setCount(count + 1)
        //}

// You then pass this function as the callback to your click event. (Click events were handled)

// Now every time that element is clicked (or any other event you are listening for happens)
// The handleClick function is invoked, it in turn invokes the setter function, which changes the value of your variable.
// The beautiful thing about state is that the DOM re-renders automatically. No need for querySelectors.

// Real Example:

import React, {useState} from "react";

function Bigbutton(){

    const [number, setNumber] = useState(0)

    function handleNumberIncrement(){
        setNumber(number + 1)
    }
    return(
        <button id="big-button" onClick={handleNumberIncrement}>{number}</button>
    )
}

export default Bigbutton

/*
    How we would have done this using the DOM
 *  const button = document.querySelector("button")
    button.addEventListener('click', (e) => {
        const currentValue = parseInt(e.target.textContent)
        const newValue = currentValue +=1
        button.textContent = newValue
 })
 */