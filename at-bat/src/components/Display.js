import React from 'react';

const Display = (props) => {
  return (
    <div className="display">
      <span>Balls: {props.balls}</span>
      <span>Strikes: {props.strikes}</span>
    </div>
  );
}

export default Display;
