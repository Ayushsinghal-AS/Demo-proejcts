import React, { useState, useMemo } from 'react';

const ExpensiveCalculationComponent = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const result = useMemo(() => {
    return Number(value1) + Number(value2);
  }, [value1]);

  const handleValue1Change = (event) => {
    setValue1(event.target.value);
  };

  const handleValue2Change = (event) => {
    setValue2(event.target.value);
  };

  return (
    <div>
      <input type="number" value={value1} onChange={handleValue1Change} />
      <input type="number" value={value2} onChange={handleValue2Change} />
      <p>Result: {result}</p>
    </div>
  );
};

export default ExpensiveCalculationComponent;