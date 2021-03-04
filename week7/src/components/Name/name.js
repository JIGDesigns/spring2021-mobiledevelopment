import React from 'react';
import { useState } from 'react';
function Name(){
    const [name, setName] = useState("");
    return (<div>
       <input type="text" placeholder="Type Workout Name" onChange={(event) => {
        setName(event.target.value);
      }} />
      {
        <p>Your Workout Name: {name}</p>
      }
       </div>);
    
 }
 export default Name;