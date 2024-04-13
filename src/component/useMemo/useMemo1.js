import React, {useEffect, useState} from 'react';

const Ayush = () => {

  const[com1, setComp1] = useState(0);
  const[com2, setComp2] = useState(0);
//   const[com3, setComp3] = useState(0);

  const isEve = () => {
    console.log("+++++++++")
    // let i = 0;
    // for(i = 0; i < 2000000; i++) 
    // return com1 % 2 === 0;
  }
  useEffect(() => {
    console.log("----------------------");
    // setComp3(com3+1);
  },[]);

  return (
    <div >
      <button onClick={() => setComp1(com1+1)}>Click - {com1}</button>
      <br />
      <span>{isEve() ? "Even" : "Odd"}</span> <br />
     {/* <span>{com3}</span>  */}
      <br />
      <button onClick={() => setComp2(com2+1)}>Click - {com2}</button>
    </div>
  );
}

export default Ayush