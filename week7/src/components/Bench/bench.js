import React, {useState} from 'react';

function Bench(){
    const [reps, setReps] = useState(0);

    return (
        <div>
            <h2>Bench Reps: {reps}</h2>
            <button onClick={() => {setReps(reps + 1)}}>Do Rep</button>
            <button onClick={() => {setReps(0)}}>Reset</button>
        </div>
    )
}
export default Bench;