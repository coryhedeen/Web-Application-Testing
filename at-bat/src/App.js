import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import DashBoard from './components/Dashboard';

function App() {
  const [ball, setBall] = useState(0);
  const [strike, setStrike] = useState(0);

function foul(){
 if(strike < 2){
   setStrike(strike + 1)
 }
}

function hit(){
  setBall(0);
  setStrike(0);
}

function ballCount(){
  if(ball < 4){
    setBall(ball + 1)
  } else if(ball === 4){
    setBall(0)
  }
}

function strikeCount(){
  if(strike < 3){
    setStrike(strike + 1)
  } else if(strike === 3){
    setStrike(0);
  }
}
  return (
    <div className="App">
      <DashBoard ballCount={ballCount}
      strikeCount={strikeCount}
      hit={hit}
      foul={foul}
      ball={ball}
      strike={strike}/>
    </div>
  );
}

export default App;
