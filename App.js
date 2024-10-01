import React, { useEffect, useState } from 'react';
import ChartComponent from './components/Chart';
import ToggleComponent from './components/Toggle';
import './App.css';

const App = () => {
  const [selectedCoin, setSelectedCoin] = useState('ethusdt');
  const [interval, setInterval] = useState('1m'); // Default 1-minute interval
  const [chartData, setChartData] = useState({});
  const socketUrl = `wss://stream.binance.com:9443/ws/${selectedCoin}@kline_${interval}`;

  useEffect(() => {
    const socket = new WebSocket(socketUrl);

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const candlestickData = {
        time: data.k.t,
        open: parseFloat(data.k.o),
        high: parseFloat(data.k.h),
        low: parseFloat(data.k.l),
        close: parseFloat(data.k.c),
        volume: parseFloat(data.k.v),
      };

      setChartData((prevData) => ({
        ...prevData,
        [selectedCoin]: [...(prevData[selectedCoin] || []), candlestickData],
      }));

      // Save data in localStorage
      localStorage.setItem(selectedCoin, JSON.stringify(chartData[selectedCoin]));
    };

    return () => socket.close();
  }, [selectedCoin, interval]);

  return (
    <div className="App">
      <ToggleComponent
        selectedCoin={selectedCoin}
        setSelectedCoin={setSelectedCoin}
        interval={interval}
        setInterval={setInterval}
      />
      <ChartComponent chartData={chartData[selectedCoin] || []} />
    </div>
  );
};

export default App;

useEffect(() => {
    const savedData = localStorage.getItem(selectedCoin);
    if (savedData) {
      setChartData((prevData) => ({
        ...prevData,
        [selectedCoin]: JSON.parse(savedData),
      }));
    }
  }, [selectedCoin]);
  