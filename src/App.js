import Crypto from "./Crypto";
import { Routes, Route } from "react-router-dom";
import "./App.css";
//import Coin from "./Coin";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.ethereum) {
      setIsWalletInstalled(true);
    }
  }, []);

  async function connectWallet() {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
    } catch (error) {
      alert("Oops! Something went wrong bro :(");
    }
  }

  function disconnectWallet() {
    setAccount(null);
  }

  if (account === null) {
    return (
      <div className="Home">
        <center>
          <h3>Welcome to the RealTimeCrypto</h3>

          {isWalletInstalled ? (
            <button onClick={connectWallet}>Connect Wallet</button>
          ) : (
            <p>Install any crypto wallet to continue</p>
          )}
        </center>
      </div>
    );
  }

  return (
    <div className="App">
      <button
        onClick={() => {
          navigate("Trend");
        }}
      >
        Continue
      </button>
      <button onClick={disconnectWallet}>Disconnect Wallet</button>
      <Routes>
        <Route path="Trend" element={<Crypto />} />
      </Routes>
    </div>
  );
}

export default App;
