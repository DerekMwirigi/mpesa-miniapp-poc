import React from 'react';
import './App.css';

function App() {
  // Function to make a call
  const makeACall = () => {
    if (window.mPesa && window.mPesa.Device) {
      window.mPesa.Device.call({
        number: '100', // Example number
        callback: (response) => {
          if (response.success) {
            alert('Call successful!');
          } else {
            alert('Call failed: ' + response.message);
          }
        },
      });
    } else {
      alert('M-Pesa Device API not available.');
    }
  };

  // Function to make a network request
  const makeNetworkRequest = () => {
    if (window.mPesa && window.mPesa.Network) {
      window.mPesa.Network.request({
        url: 'https://api.example.com/data', // Example URL
        method: 'GET',
        callback: (response) => {
          if (response.success) {
            alert('Network request successful! Response: ' + JSON.stringify(response.data));
          } else {
            alert('Network request failed: ' + response.message);
          }
        },
      });
    } else {
      alert('M-Pesa Network API not available.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>M-Pesa Mini App POC</h1>
        <p>This is a proof-of-concept application for the Safaricom M-Pesa Mini App program.</p>
        <div className="card">
          <h2>Make a Call</h2>
          <p>Click the button below to initiate a phone call to customer care (100).</p>
          <button onClick={makeACall}>Make a Call</button>
        </div>
        <div className="card">
          <h2>Make a Network Request</h2>
          <p>Click the button below to make a network request to an example API.</p>
          <button onClick={makeNetworkRequest}>Make a Network Request</button>
        </div>
      </header>
    </div>
  );
}

export default App;