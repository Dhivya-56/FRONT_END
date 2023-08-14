import React, { useState,useReducer } from 'react';

const ColorButton = () => {
 const colors = ['Red', 'Blue', 'Yellow', 'Orange', 'Purple', 'Pink'];

  const [color, setColor] = useState('');
 

  function handleColor(event) {
    setColor(event.target.value);
  }

  return (
    <>
      <select onChange={handleColor}>

        {colors.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
  
      <div className="container" style={{ backgroundColor: color }}></div>
    </>
  );
};

export default ColorButton;
