import React from 'react'
import {useState,useReducer} from 'react'
const Increment = () => {
 
    const[count,setCount]=useState(0)
    function handleIncrement(){
setCount(count=>count+1)
    }
  return (
    <div>
        <p>Count is:{count}</p>
      <button onClick={handleIncrement}>Click Me!</button>
    </div>
  )
}

export default Increment
