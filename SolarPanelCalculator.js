
import React, { useState } from 'react';
import './SolarPanel.css'; 
import { Link } from 'react-router-dom';

const SolarPanelCalculator = () => {
  const [inputValue, setInputValue] = useState(0);
  const [result, setResult] = useState(0);

  const calculateEnergySavings = () => {
    const costPerUnit = 7; 
    const energySavings = inputValue * costPerUnit; 
    setResult(energySavings);
  };

  return (
    <div>  
         <nav className="navbar">
      <div className="nav-left">
      <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/green-energy-logo-design-template-a8af84d86dfc8201bf5b2ca64a1d9976_screen.jpg?ts=1687720685" alt="Logo" className="logo" />
      </div>
      <div className="nav-right">
        <ul className="nav-list">
        <Link to={"/"}><li className="nav-item">Home</li></Link>

        
          <Link to={"/calculater"}> <li className="nav-item">Energy Calculater</li></Link>
          
          <Link to={"/energy"}>
          <li className="nav-item">Green Energy Provider</li></Link>
          <Link to={"/donation"}><li className="nav-item">Donation</li></Link>
        </ul>
       
      </div>
    </nav>
         <div className="solar-panel-calculator mt-5">
      <h2>Solar Panel Calculator</h2>
      <label className="label-input">
        Enter your monthly electricity consumption (in units):
        <input
          type="number"
          className="input-field"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
      <button className="calculate-button" onClick={calculateEnergySavings}>
        Calculate
      </button>
      <p className="result">Estimated Energy Savings: ₹{result.toFixed(2)}</p>
    </div>
    </div>
 
  );
};

export default SolarPanelCalculator;
