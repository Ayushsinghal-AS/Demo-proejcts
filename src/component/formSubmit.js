import React, { useState } from 'react';

const Appssss = () => {
  const [inputValue, setInputValue] = useState('');

  const handleBlur = () => {
    alert(`You entered: ${inputValue}`);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>React onBlur Example</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter some text and click outside..."
      />
    </div>
  );
};

export default Appssss;
