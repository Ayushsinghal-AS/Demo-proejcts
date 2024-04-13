import React, { useReducer, useState } from "react";
import "./style.css";

const intialData ={number : 10}; 

const reducer = (state, action) => {
 
  if (action.type === "INCR") {
    state.number = state.number + 1
  }

  if (state.number > 0 && action.type === "DECR") {
    state.number = state.number - 1
  }
  return state; 
};

const UseReducer = () => {
 
  const [state, dispatch] = useReducer(reducer, intialData);

  return (
    <>
      <div className="center_div">
        <p>{state.number}</p>
        <div class="button2" onClick={() => dispatch({ type: "INCR" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div class="button2" onClick={() => dispatch({ type: "DECR" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default UseReducer;


// import React, { useReducer, useState } from "react";
// import "./style.css";

// const intialData ={number : 10}; 

// const reducer = (state, action) => {
 
//   if (action.type === "INCR") {
//     return {...state, number : state.number + 1}
//   }

//   if (state.number > 0 && action.type === "DECR") {
//     return { ...state, number : state.number - 1}
//   }
//   return state; 
// };

// const UseReducer = () => {
 
//   const [state, dispatch] = useReducer(reducer, intialData);

//   return (
//     <>
//       <div className="center_div">
//         <p>{state.number}</p>
//         <div class="button2" onClick={() => dispatch({ type: "INCR" })}>
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//           INCR
//         </div>
//         <div class="button2" onClick={() => dispatch({ type: "DECR" })}>
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//           DECR
//         </div>
//       </div>
//     </>
//   );
// };

// export default UseReducer;

// import React, { useReducer } from "react";
// import "./style.css";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "INCR":
//       return { ...state, name1: state.name2 };
//     case "DECR":
//       console.log("9",state.name1)
//       return { ...state, name1: state.name2 };
//     default:
//       return state;
//   }
// };

// const UseReducer = () => {
//   const initialState = { name1: "amresh", name2: "ayush" };
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <>
//       <div className="center_div">
//         <p>result: {state.name1}</p>
//         <div className="button2" onClick={() => dispatch({ type: "INCR" })}>
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//           INCR
//         </div>
//         <div className="button2" onClick={() => dispatch({ type: "DECR" })}>
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//           DECR
//         </div>
//       </div>
//     </>
//   );
// };

// export default UseReducer;

