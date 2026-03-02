import React from 'react';
import './App.css';

const isMiniApp = () => typeof window !== 'undefined' && !!window.my;

function App() {

    const makeACall = () => {
        if (isMiniApp()) {
            window.my.makePhoneCall({ number: '100' });
        } else {
            alert('[DEV] Not inside M-Pesa app. my.makePhoneCall unavailable.');
        }
    };

    const makeNetworkRequest = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const data = await response.json();
            alert('Network request successful! Response: ' + JSON.stringify(data));
        } catch (error) {
            alert('Network request failed: ' + error.message);
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
                    <p>Click the button below to make a standard network request to an example public API.</p>
                    <button onClick={makeNetworkRequest}>Make a Network Request</button>
                </div>
            </header>
        </div>
    );
}

export default App;