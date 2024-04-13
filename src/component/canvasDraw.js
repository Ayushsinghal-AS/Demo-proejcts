import React, { useState } from 'react';

function Overlay() {
  const [offset, setOffset] = useState([0, 0]);
  const [isDown, setIsDown] = useState(false);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setOffset([
      e.currentTarget.offsetLeft - e.clientX,
      e.currentTarget.offsetTop - e.clientY
    ]);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    if (isDown) {
      const divOverlay = document.getElementById("overlay");
      divOverlay.style.left = e.clientX + offset[0] + 'px';
      divOverlay.style.top = e.clientY + offset[1] + 'px';
    }
  };

  return (
    <div
      id="overlay"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100px',
        height: '100px',
        backgroundColor: 'green'
      }}
    >
      {/* ... some other stuff ... */}
      <img id="large" src="" alt="" />
    </div>
  );
}

export default Overlay;

// import React, { useState } from 'react';


// const GraphComponent = () => {
//   const [dots, setDots] = useState([]);
//   const [selectedDot, setSelectedDot] = useState(null);
//   const [shapes, setShapes] = useState([]);
//   const [selectedShape, setSelectedShape] = useState(null);
//   const [graphArea, setGraphArea] = useState({ width: 500, height: 300 });

//   // for testing purposes
//   // const [position, setPosition] = useState({ x: 0, y: 0 });
//   // const [isDragging, setIsDragging] = useState(false);
//   // const [offset, setOffset] = useState({ x: 0, y: 0 });
//   const [offset, setOffset] = useState([0, 0]);
//   const [isDown, setIsDown] = useState(false);

//   const handleMouseDown1 = (event) => {
//     event.preventDefault();
//     setIsDragging(true);
//     const { clientX, clientY } = event;
//     const rect = event.target.getBoundingClientRect();
//     setOffset({ x: clientX - rect.left, y: clientY - rect.top });
//   };

//   const handleMouseMove1 = (event) => {
//     event.preventDefault();
//     if (isDragging) {
//       const { clientX, clientY } = event;
//       setPosition({ x: clientX - offset.x, y: clientY - offset.y });
//     }
//   };

//   const handleMouseUp1 = () => {
//     setIsDragging(false);
//   };
//   const handleMouseDown = (e) => {
//     setIsDown(true);
//     setOffset([
//       e.currentTarget.offsetLeft - e.clientX,
//       e.currentTarget.offsetTop - e.clientY
//     ]);
//   };

//   const handleMouseUp = () => {
//     setIsDown(false);
//   };

//   const handleMouseMove = (e) => {
//     e.preventDefault();
//     if (isDown) {
//       const divOverlay = document.getElementById("overlay");
//       divOverlay.style.left = e.clientX + offset[0] + 'px';
//       divOverlay.style.top = e.clientY + offset[1] + 'px';
//     }
//   };

//   // const handleMouseDown = (event) => {
//   //   event.preventDefault();
//   //   setIsDragging(true);
//   //   const { clientX, clientY } = event;
//   //   const rect = event.target.getBoundingClientRect();
//   //   setOffset({ x: clientX - rect.left, y: clientY - rect.top });
//   // };

//   // const handleMouseMove = (event) => {
//   //   event.preventDefault();
//   //   if (isDragging) {
//   //     const { clientX, clientY } = event;
//   //     setPosition({ x: clientX - offset.x, y: clientY - offset.y });
//   //   }
//   // };

//   // const handleMouseUp = () => {
//   //   setIsDragging(false);
//   // };

//   const handleDotDoubleClick = (event) => {
//     const rect = event.target.getBoundingClientRect();
//     const x = event.clientX - rect.left;
//     const y = event.clientY - rect.top;
//     const dot = { x, y };
//     setDots([...dots, dot]);
//   };
  
//   // it works properly with
//   const handleShapeCreation = (event) => {
//     if (selectedDot) {
//       const shapeType = event.target.value;
//       const shape = {
//         type: shapeType,
//         x: selectedDot.x,
//         y: selectedDot.y,
//         width: 50,
//         height: 50,
//       };
//       setShapes([...shapes, shape]);
//     }
//   };

//   const handleShapeDragStart = (event, shape) => {
//     setSelectedShape(shape);
//     event.dataTransfer.setData('text/plain', '');
//   };

//   const handleShapeDrag = (event) => {
//     event.preventDefault();
//     if (selectedShape) {
//       const rect = event.target.parentNode.getBoundingClientRect();
//       const x = event.clientX - rect.left - selectedShape.width / 2;
//       const y = event.clientY - rect.top - selectedShape.height / 2;

//       const updatedShapes = shapes.map((shape) =>
//         shape === selectedShape ? { ...shape, x, y } : shape
//       );

//       setShapes(updatedShapes);
//     }
//   };

//   const handleShapeDragEnd = () => {
//     setSelectedShape(null);
//   };
  
//   // it properlly works with
//   const handleShapeResize = (event, shape) => {
//     const { width, height } = event.target.getBoundingClientRect();
//     const updatedShapes = shapes.map((s) =>
//       s === shape ? { ...s, width, height } : s
//     );
//     setShapes(updatedShapes);
//   };

//   // it properly works with
//   const handleGraphAreaChange = (event) => {
//     const { id, value } = event.target;
//     setGraphArea((prevGraphArea) => ({
//       ...prevGraphArea,
//       [id]: parseInt(value),
//     }));
//   };

//   // const handleGraphAreaChange = (event) => {
//   //   const width = parseInt(event.target.value.width);
//   //   const height = parseInt(event.target.value.height);
//   //   setGraphArea({ width, height });
//   // };

//   return (
//     <div>
//       <div
//         style={{
//           position: 'relative',
//           width: graphArea.width,
//           height: graphArea.height,
//           border: '1px solid black',
//           margin: '20px',
//         }}
//         onDoubleClick={handleDotDoubleClick}
//       >
//         {dots.map((dot, index) => (
//           <div
//             key={index}
//             style={{
//               position: 'absolute',
//               left: dot.x - 5,
//               top: dot.y - 5,
//               width: 10,
//               height: 10,
//               borderRadius: '50%',
//               backgroundColor: 'red',
//               zIndex: selectedDot === dot ? 1 : 0,
//             }}
//             onClick={() => setSelectedDot(dot)}
//           />
//         ))}

//         {shapes.map((shape, index) => (
//           <div
//             key={index}
//             id="overlay"
//             style={{
//               position: 'absolute',
//               left: shape.x,
//               top: shape.y,
//               // right: shape.x,
//               // bottom: shape.y,
//               width: shape.width,
//               height: shape.height,
//               backgroundColor: 'blue',
//               zIndex: selectedShape === shape ? 1 : 0,
//               cursor: isDragging ? 'grabbing' : 'grab',
//               // cursor: 'move',
//               // resize: 'both',
//               // overflow: 'auto',
//             }}
//             onMouseDown={handleMouseDown}
//             onMouseUp={handleMouseUp}
//             onMouseMove={handleMouseMove}
//             // draggable
//             // onDragStart={(event) => handleShapeDragStart(event, shape)}
//             // onDrag={(event) => handleShapeDrag(event)}
//             // onDragEnd={handleShapeDragEnd}
//           >
//             <div
//               style={{
//                 width: '100%',
//                 height: '100%',
//                 position: 'relative',
//               }}
//             >
//               <div
//                 style={{
//                   position: 'absolute',
//                   bottom: 0,
//                   right: 0,
//                   width: '10px',
//                   height: '10px',
//                   cursor: 'nwse-resize',
//                 }}
//                 draggable={false}
//                 onMouseDown={(event) => {
//                   event.stopPropagation();
//                   setSelectedShape(shape);
//                 }}
//                 onMouseUp={(event) => {
//                   event.stopPropagation();
//                   setSelectedShape(null);
//                 }}
//                 onDrag={(event) => handleShapeResize(event, shape)}
//               ></div>
//             </div>
//           </div>
//         ))}
//       </div>
    


//     {/* for testing purposes  */}
//     {/*   
//       <div
//       style={{
//         position: 'absolute',
//         left: position.x,
//         top: position.y,
//         width: '50px',
//         height: '50px',
//         backgroundColor: 'red',
//         cursor: isDragging ? 'grabbing' : 'grab',
//       }}
//       onMouseDown={handleMouseDown}
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//     >
//     </div> */}

//       <div>
//         <label htmlFor="shapeType">Shape Type:</label>
//         <select id="shapeType" onChange={handleShapeCreation}>
//           <option value="">Select a shape</option>
//           <option value="rectangle">Rectangle</option>
//           <option value="square">Square</option>
//         </select>
//       </div>

//       <div>
//         <label htmlFor="graphWidth">Graph Width:</label>
//         <input
//           type="number"
//           id="width"
//           value={graphArea.width}
//           onChange={handleGraphAreaChange}
//         />
//       </div>

//       <div>
//         <label htmlFor="graphHeight">Graph Height:</label>
//         <input
//           type="number"
//           id="height"
//           value={graphArea.height}
//           onChange={handleGraphAreaChange}
//         />
//       </div>
//     </div>
//   );
// };

// export default GraphComponent;



