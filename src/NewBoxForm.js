import React, { useState } from 'react';

function NewBoxForm({ addBox }) {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBox = { width, height, color };
    addBox(newBox);
    setWidth('');
    setHeight('');
    setColor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width:</label>
      <input
        type="text"
        id="width"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
      />

      <label htmlFor="height">Height:</label>
      <input
        type="text"
        id="height"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <label htmlFor="color">Color:</label>
      <input
        type="text"
        id="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      <button type="submit">Add Box</button>
    </form>
  );
}

export default NewBoxForm;
