import Crypto from "./Crypto";
import { Routes, Route } from "react-router-dom";
import "./App.css";
//import Coin from "./Coin";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function App() {
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  const navigate = useNavigate();
  const [account, setAccount] = useState(null);
  useEffect(() => {
    if (window.ethereum) {
      setIsWalletInstalled(true);
    }
  }, []);
  async function connectWallet() {
    window.ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .then((accounts) => {
        setAccount(accounts[0]);
      })
      .catch((error) => {
        alert("Oops! Something went wrong bro :(");
      });
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
    <div>
      <span>Connected as: {account}</span>
      <button
        onClick={() => {
          navigate("Trend");
        }}
      >
        Continue
      </button>
      <Routes>
        <Route path="Trend" element={<Crypto />} />
      </Routes>
    </div>
  );
}
export default App;
