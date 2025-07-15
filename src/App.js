import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [account, setAccount] = useState(null);
  const [status, setStatus] = useState("Not connected");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        setStatus("Wallet connected ✅");
      } catch (err) {
        setStatus("Connection failed ❌");
      }
    } else {
      setStatus("Please install MetaMask 🦊");
    }
  };

  const simulateSwap = () => {
    setStatus("Simulated token swap 🚀");
  };

  // ✅ This is where return() should be — INSIDE the component
  return (
    <div className="container">
      <h1>FusionConnect</h1>

      <button onClick={connectWallet}>
        {account ? "Connected" : "Connect Wallet"}
      </button>

      <p>{status}</p>

      <input className="input" placeholder="From Token (0x...)" />
      <input className="input" placeholder="To Token (0x...)" />
      <input className="input" placeholder="Amount In" type="number" />
      <input className="input" placeholder="Min Return" type="number" />

      <button onClick={simulateSwap}>Simulate Swap</button>
    </div>
  );
}
