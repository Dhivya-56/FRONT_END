import React from 'react'
import {useState} from 'react';
const Input = () => {
    const[count,setCount]=useState(0)
   function handleChange(){
    setCount(count+1)
   }
  return (
    <div>
      <p>Count is:{count}</p>
      <input type="text" onChange={handleChange}></input>
    </div>
  )
}

export default Input
