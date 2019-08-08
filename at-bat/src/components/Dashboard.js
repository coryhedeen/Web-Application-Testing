import React, { useState } from 'react';
import Display from './Display';

const DashBoard = (props) => {
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
    <div className="dashBoard">
      <Display balls={ball} strikes={strike}/>
        <button onClick={() => strikeCount()}>strike</button>
        <button onClick={() => ballCount()}>ball</button>
        <button onClick={() => foul()}>foul</button>
        <button onClick={() => hit()}>hit</button>

    </div>
  );
}

export default DashBoard;
