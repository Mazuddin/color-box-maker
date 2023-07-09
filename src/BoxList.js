import React, { useState } from 'react';
import Box from './Box';
import './BoxList.css';
import NewBoxForm from './NewBoxForm';

function BoxList() {
  const [boxes, setBoxes] = useState([]);
  const [h1Text, setH1Text] = useState('');

  const addBox = (newBox) => {
    setBoxes((prevBoxes) => [...prevBoxes, newBox]);
  };

  const removeBox = (index) => {
    setBoxes((prevBoxes) => {
      const updatedBoxes = [...prevBoxes];
      updatedBoxes.splice(index, 1);
      return updatedBoxes;
    });
  };

  return (
    <div>
      <h1>Box Maker</h1>
    
      <NewBoxForm addBox={addBox} />
      {boxes.map((box, index) => (
        <Box
          key={index}
          width={box.width}
          height={box.height}
          color={box.color}
          removeBox={() => removeBox(index)}
        />
      ))}
    </div>
  );
}

export default BoxList;
