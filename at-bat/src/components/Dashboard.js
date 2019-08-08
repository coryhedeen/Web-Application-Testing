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
  setBall(ball === 0);
  setStrike(strike === 0);
}

  return (
    <div className="dashBoard">
      <Display balls={ball} strikes={strike}/>
        <button onClick={() => setStrike(strike + 1)}>strike</button>
        <button onClick={() => setBall(ball + 1)}>ball</button>
        <button onClick={() => foul()}>foul</button>
        <button onClick={() => hit()}>hit</button>

    </div>
  );
}

export default DashBoard;
