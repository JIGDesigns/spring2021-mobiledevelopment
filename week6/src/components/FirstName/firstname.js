import React, {useState} from 'react';
import Picture from '../Picture/picture.js';

function FirstName(){
    const [letters, setLetter] = useState(0);

    var picture = null
    if (letters >8){
        picture= <Picture/>
    }

    return (
        <div>
            <h2>Click once for each letter in your first name: {letters}</h2>
            <button onClick={() => {setLetter(letters + 1)}}>Add Letter</button>
            <button onClick={() => {setLetter(0)}}>Reset</button>
            {picture}
        </div>
    )
}
export default FirstName;