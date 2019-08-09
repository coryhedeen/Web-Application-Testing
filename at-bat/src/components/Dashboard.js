import React, { useState } from 'react';
import Display from './Display';

const DashBoard = (props) => {


  return (
    <div className="dashBoard">
      <Display balls={props.ball} strikes={props.strike}/>
        <button onClick={props.strikeCount}>strike</button>
        <button onClick={props.ballCount}>ball</button>
        <button onClick={props.foul}>foul</button>
        <button onClick={props.hit}>hit</button>

    </div>
  );
}

export default DashBoard;
