import React from 'react';

function Fries (props) {
    return(
        <div>
            <h2>Fries: {props.state.fries}</h2>
            <button onClick={() => props.dispatch({"type": "increment2"})}>Add Fries</button>
            <button onClick={() => props.dispatch({"type": "decrement2"})}>Remove Fries</button>

        </div>
    )
}
export default Fries;