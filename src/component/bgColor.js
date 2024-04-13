import React, { useState, useEffect } from 'react';

const BgColor = () => {
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isChanging) {
      intervalId = setInterval(changeBackgroundColor, 200); 
    }

    return () => {
      clearInterval(intervalId); 
    };
  }, [isChanging]);

  const changeBackgroundColor = () => {
    const hex = '0123456789ABCDEF';
    let Color = '#';
    for(let i=0; i<6; i++)
    {
        Color += hex[`${Math.floor(Math.random() * 16)}`];
        document.body.style.backgroundColor = Color;
    }
    return Color;
    // const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  const handleStartClick = () => {
    setIsChanging(true);
  };

  const handleStopClick = () => {
    setIsChanging(false);
  };

  return (
    <div>
      <button variant="success" onClick={handleStartClick} disabled={isChanging}>
        Start
      </button>
      <button variant="danger" onClick={handleStopClick} disabled={!isChanging}>
        Stop
      </button>
    </div>
  );
};

export default BgColor;
