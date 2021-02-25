import React, {useState} from 'react';

function Curls(){
    const [reps, setReps] = useState(0);

    return (
        <div>
            <h2>Curl Reps: {reps}</h2>
            <button onClick={() => {setReps(reps + 1)}}>Do Rep</button>
            <button onClick={() => {setReps(0)}}>Reset</button>
        </div>
    )
}
export default Curls;