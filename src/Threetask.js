import React, { useReducer } from 'react';

const Threetask = () => {
    const colors = ['red', 'blue', 'green', 'yellow']
    const initialValues = {
        color: 'red',
        increment: 0,
        input: ''
    };

    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                return {
                    ...state,
                    increment: state.increment + 1 // Increment the value
                };
                case 'color':
                    return{
                        ...state,
                        color:action.color
                    }
                    case 'input':
                        return{
                            ...state,
                            input:action.input
                        }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialValues);

    function handleClick() {
        dispatch({
            type: 'increment'
        });
    }
    function handleColor(e) {
        dispatch({
            type: 'color',
            color: e.target.value
        });
    }
function handleChange(event){
    dispatch({
        type: 'input',
        input: event.target.value
    })
}
let char=state.input.length
    return (
        <>
            <div>
                <h1>Three Task</h1>
                <p>Increment value: {state.increment}</p>
                <button onClick={handleClick}>Click Me!</button>
            </div>
            
                <select onChange={handleColor}>

                    {colors.map((color) => (
                        <option key={color} value={color}>
                            {color}
                        </option>
                    ))}
                </select>

                <div className="container" style={{ backgroundColor: state.color }}></div>
                <div>
                <p>Count is:{char}</p>
      <input type="text" onChange={handleChange}></input>
                </div>
            
        </>
    );
};

export default Threetask;
