import React from 'react';

function Box({ width, height, color, removeBox }) {
  const boxStyle = {
    backgroundColor: color,
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <div>
      <div style={boxStyle}></div>
      <button onClick={removeBox}>X</button>
    </div>
  );
}

export default Box;
