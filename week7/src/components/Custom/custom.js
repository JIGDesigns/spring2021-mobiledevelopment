import React, {useState} from 'react';
import Celebration from '../Celebration/celebration.js';

function Custom(){
    const [reps, setReps] = useState(0);

    var picture = null
    if (reps >10){
        picture= <Celebration/>
    }

    return (
        <div>
            <h2>Custom Reps: {reps}</h2>
            <button onClick={() => {setReps(reps + 1)}}>Do Rep</button>
            <button onClick={() => {setReps(0)}}>Reset</button>
            {picture}
        </div>
    )
}
export default Custom;