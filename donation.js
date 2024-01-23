// components/Donation.js
import React, { useState } from 'react';
import './donation.css';
import { Link } from 'react-router-dom';
import './nav.css'

const Donation = () => {
  const [paymentMethod, setPaymentMethod] = useState('netbank');
  const [donorName, setDonorName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [donationAmount, setDonationAmount] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleDonorNameChange = (event) => {
    setDonorName(event.target.value);
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleDonationAmountChange = (event) => {
    setDonationAmount(event.target.value);
  };

  const handlePay = () => {
    
    console.log(`Paying $${donationAmount} using ${paymentMethod} by ${donorName} (${mobileNumber})...`);
   

   
    setShowDetails(true);
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
    <div className="donation-container">
         
      <h2 className="donation-heading">Make a Donation</h2>
      <p className="donation-text">Support the adoption of clean energy by making a donation.</p>

      <label htmlFor="paymentMethod" className="form-label">Select Payment Method:</label>
      <select id="paymentMethod" value={paymentMethod} onChange={handlePaymentMethodChange} className="form-input">
        <option value="netbank">Net Bank</option>
        <option value="paytm">Paytm</option>
        <option value="paypal">PayPal</option>
        <option value="googlepay">Google Pay</option>
        <option value="amazonpay">Amazon Pay</option>
      </select>

      <label htmlFor="donorName" className="form-label">Name:</label>
      <input
        type="text"
        id="donorName"
        value={donorName}
        onChange={handleDonorNameChange}
        className="form-input"
      />

      <label htmlFor="mobileNumber" className="form-label">Mobile Number:</label>
      <input
        type="tel"
        id="mobileNumber"
        value={mobileNumber}
        onChange={handleMobileNumberChange}
        className="form-input"
      />

      <label htmlFor="donationAmount" className="form-label">Amount:</label>
      <input
        type="number"
        id="donationAmount"
        value={donationAmount}
        onChange={handleDonationAmountChange}
        className="form-input"
      />

      <button onClick={handlePay} className="form-button">Donate</button>

      {showDetails && (
        <div style={{ marginTop: '20px' }}>
          <h3>Entered Details:</h3>
          <p><strong>Name:</strong> {donorName}</p>
          <p><strong>Mobile Number:</strong> {mobileNumber}</p>
          <p><strong>Donation Amount:</strong> ₹{donationAmount}</p>
          <p><strong>Payment Method:</strong> {paymentMethod}</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default Donation;
