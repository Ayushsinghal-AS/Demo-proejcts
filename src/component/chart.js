import React from 'react';
import { Line } from 'react-chartjs-2';

const AreaChart = () => {
  const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label: 'Data',
        data: [12, 19, 3, 5, 2, 3, 8],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Area Chart Example</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default AreaChart;
