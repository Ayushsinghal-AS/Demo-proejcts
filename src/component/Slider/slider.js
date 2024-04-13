import React, { useRef, useState } from 'react';
import './slider.css';

const SimpleSlider = ({ min, max, stepValue, value, isDisabled, showValue }) => {
  const maxVal = max ? max : 100000;
  const minval = min ? min : 0;
  const theValue = value ? value : maxVal;
  const ref1 = useRef();
  const ref2 = useRef();
  const [sliderValue, setSliderValue] = useState(theValue);

  let defaultProgress = () => {
    let perTop, perBottom;
    if (minval >= 0 && maxVal >= 0) {
      perTop = theValue * 1 - minval * 1;
      perBottom = maxVal * 1 - minval * 1;
    } else {
      perTop = Math.abs(minval) * 1 + theValue * 1;
      perBottom = Math.abs(minval) * 1 + maxVal * 1;
    }
    return (perTop / perBottom) * 100;
  };

  const [progressLeft, setProgressLeft] = useState(defaultProgress()); 

  let defaultClass = {
    background: `linear-gradient(to right, ${isDisabled ? 'gray' : '#4299e1'} ${defaultProgress()}%, #ccc ${defaultProgress()}%)`,
  };

  const handleSliderChange = (event) => {
    const tempSliderValue = event.target.value;

    setSliderValue(tempSliderValue);

    let perTop, perBottom;
    if (minval >= 0 && maxVal >= 0) {
      perTop = tempSliderValue * 1 - minval * 1;
      perBottom = maxVal * 1 - minval * 1;
    } else {
      perTop = Math.abs(minval) * 1 + tempSliderValue * 1;
      perBottom = Math.abs(minval) * 1 + maxVal * 1;
    }

    const progress = (perTop / perBottom) * 100;
    setProgressLeft(progress)

   
//    let d = progress - ((ref2.current.offsetWidth/ref1.current.offsetWidth) * 100);
//    console.log(ref2.current.offsetWidth)


    event.target.style.background = `linear-gradient(to right, ${isDisabled ? 'gray' : '#4299e1'} ${progress}%, #ccc ${progress}%)`;
  };

  return (
    <div className="range" ref={ref1}>
      <input
        className={`simple_range ${isDisabled ? 'dis' : ''}`}
        style={defaultClass}
        type="range"
        min={minval}
        max={maxVal}
        value={sliderValue}
        step={stepValue ? stepValue : undefined}
        id="range"
        onChange={handleSliderChange}
        disabled={isDisabled}
      />
      {true ? (
        <div className="valueDiv" ref={ref2} style={{ left:maxVal<=100 ? `${progressLeft-(0.10*progressLeft)}%` : `${progressLeft-(0.13*progressLeft)}%` }}>
          <div className={`value ${isDisabled ? 'disVal' : ''}`}>{sliderValue}</div>
          <div className="dandi"></div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SimpleSlider;

