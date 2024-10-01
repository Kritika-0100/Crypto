import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-moment'; // Import for time axis formatting

const ChartComponent = ({ chartData }) => {
  const formatChartData = () => {
    return {
      labels: chartData.map((data) => new Date(data.time)),
      datasets: [
        {
          label: 'Price',
          data: chartData.map((data) => data.close),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <div className="chart-container">
      <Line
        data={formatChartData()}
        options={{
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'minute',
              },
            },
            y: {
              beginAtZero: false,
            },
          },
        }}
      />
    </div>
  );
};

export default ChartComponent;
