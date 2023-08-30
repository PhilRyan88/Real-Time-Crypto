import React from "react";
import "./Coin.css";

const Coin = ({
  name,
  price,
  symbol,
  marketcap,

  image,
  priceChange,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <h1 className="coin-symbol">{symbol}</h1>
        </div>
        <div className="coin-data">
          <h4 className="coin-price">₹{price}</h4>

          {priceChange < 0 ? (
            <h3 className="coin-percent red">{priceChange.toFixed(2)}%</h3>
          ) : (
            <h3 className="coin-percent green">{priceChange.toFixed(2)}%</h3>
          )}

          <p className="coin-marketcap"></p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
