import React from 'react';

const ToggleComponent = ({ selectedCoin, setSelectedCoin, interval, setInterval }) => {
  const handleCoinChange = (event) => {
    setSelectedCoin(event.target.value);
  };

  const handleIntervalChange = (event) => {
    setInterval(event.target.value);
  };

  return (
    <div className="toggle-container">
      <select value={selectedCoin} onChange={handleCoinChange}>
        <option value="ethusdt">ETH/USDT</option>
        <option value="bnbusdt">BNB/USDT</option>
        <option value="dotusdt">DOT/USDT</option>
      </select>

      <select value={interval} onChange={handleIntervalChange}>
        <option value="1m">1 Minute</option>
        <option value="3m">3 Minutes</option>
        <option value="5m">5 Minutes</option>
      </select>
    </div>
  );
};

export default ToggleComponent;
