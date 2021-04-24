
import React from 'react';

function Burgers (props) {
    return(
        <div>
            <h2>Burgers: {props.state.burgers}</h2>
            <button onClick={() => props.dispatch({"type": "increment1"})}>Add Burger</button>
            <button onClick={() => props.dispatch({"type": "decrement1"})}>Remove Burger</button>

        </div>
    )
}
export default Burgers;