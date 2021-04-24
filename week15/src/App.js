import React, {useReducer} from 'react';
import './App.css';
import {state, reducer} from './components/ApplicationState';
import Burgers from './components/Burgers';
import Fries from './components/Fries';

function App() {

  const[currentState, dispatch] = useReducer(reducer, state);

  return (
    <div className="App">
      <header className="App-header">
        <Burgers state={currentState} dispatch={dispatch}/>
        <Fries state={currentState} dispatch={dispatch}/>

      </header>
    </div>
  );
}

export default App;
