import Crypto from "./Crypto";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  const [account, setAccount] = useState(null);
  const [continueClicked, setContinueClicked] = useState(false); // New state
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

  function handleContinueClick() {
    setContinueClicked(true);
    navigate("Trend");
  }

  if (account === null) {
    return (
      <div className="Home">
        <center>
          <section className="heading-container">
            <h2 class="welcome-heading">Welcome to the RealTimeCrypto</h2>
          </section>

          <section className="btnn">
            {isWalletInstalled ? (
              <button className="connect-button" onClick={connectWallet}>
                Connect Wallet
              </button>
            ) : (
              <p>Install any crypto wallet to continue</p>
            )}
          </section>
        </center>
      </div>
    );
  }

  return (
    <div className="App">
      {!continueClicked && (
        <button onClick={handleContinueClick}>Continue</button>
      )}
      <button onClick={disconnectWallet}>Disconnect Wallet</button>
      <Routes>
        <Route path="Trend" element={<Crypto />} />
      </Routes>
    </div>
  );
}

export default App;
