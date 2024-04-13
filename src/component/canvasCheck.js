import React, { useState } from 'react';

const Shape = ({ shape, selectedShape, handleShapeDragStart, handleShapeResize }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (event) => {
    setIsDragging(true);
    const { clientX, clientY } = event;
    setPosition({ x: clientX, y: clientY });
    handleShapeDragStart(event, shape);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const { clientX, clientY } = event;
      const deltaX = clientX - position.x;
      const deltaY = clientY - position.y;
      setPosition({ x: clientX, y: clientY });
      handleShapeResize(shape, deltaX, deltaY);
    }
  };

  return (
    <div
      style={{
        position: 'absolute',
        left: shape.x,
        top: shape.y,
        width: shape.width,
        height: shape.height,
        backgroundColor: 'blue',
        zIndex: selectedShape === shape ? 1 : 0,
        cursor: 'move',
        resize: 'both',
        overflow: 'auto',
      }}
      draggable
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '10px',
            height: '10px',
            cursor: 'nwse-resize',
          }}
          draggable={false}
        ></div>
      </div>
    </div>
  );
};

const GraphComponent2 = () => {
  const [dots, setDots] = useState([]);
  const [shapes, setShapes] = useState([]);
  const [selectedShape, setSelectedShape] = useState(null);
  const [graphArea, setGraphArea] = useState({ width: 500, height: 300 });

  const handleDotDoubleClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const dot = { x, y };
    setDots([...dots, dot]);
  };

  const handleShapeCreation = (event) => {
    if (selectedShape) {
      const shapeType = event.target.value;
      const shape = {
        type: shapeType,
        x: selectedShape.x,
        y: selectedShape.y,
        width: 50,
        height: 50,
      };
      setShapes([...shapes, shape]);
    }
  };

  const handleShapeDragStart = (event, shape) => {
    setSelectedShape(shape);
    event.dataTransfer.setData('text/plain', '');
  };

  const handleShapeResize = (shape, deltaX, deltaY) => {
    const updatedShapes = shapes.map((s) =>
      s === shape ? { ...s, x: s.x + deltaX, y: s.y + deltaY } : s
    );
    setShapes(updatedShapes);
  };

  const handleGraphAreaChange = (event) => {
    const { id, value } = event.target;
    setGraphArea((prevGraphArea) => ({
      ...prevGraphArea,
      [id]: parseInt(value),
    }));
  };

  return (
    <div>
      <div
        style={{
          position: 'relative',
          width: graphArea.width,
          height: graphArea.height,
          border: '1px solid black',
          margin: '20px',
        }}
        onDoubleClick={handleDotDoubleClick}
      >
        {dots.map((dot, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: dot.x - 5,
              top: dot.y - 5,
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: 'red',
            }}
          />
        ))}

        {shapes.map((shape, index) => (
          <Shape
            key={index}
            shape={shape}
            selectedShape={selectedShape}
            handleShapeDragStart={handleShapeDragStart}
            handleShapeResize={handleShapeResize}
          />
        ))}
      </div>

      <div>
        <label htmlFor="shapeType">Shape Type:</label>
        <select id="shapeType" onChange={handleShapeCreation}>
          <option value="">Select a shape</option>
          <option value="rectangle">Rectangle</option>
          <option value="square">Square</option>
        </select>
      </div>

      <div>
        <label htmlFor="graphWidth">Graph Width:</label>
        <input
          type="number"
          id="width"
          value={graphArea.width}
          onChange={handleGraphAreaChange}
        />
      </div>

      <div>
        <label htmlFor="graphHeight">Graph Height:</label>
        <input
          type="number"
          id="height"
          value={graphArea.height}
          onChange={handleGraphAreaChange}
        />
      </div>
    </div>
  );
};

export default GraphComponent2;
