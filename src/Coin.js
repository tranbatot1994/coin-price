import React from 'react';
import './Coin.css';


const Coin=({name, image, symbol, price, volume,priceChange, marketcap, rank }) => {
    return (
        <div className="coin-container">
          <div className="coin-row">
              <div className="coin">
                  <p className="coin-rank">{rank}</p>
                  <img src={image} alt="crypto"/>
                  <h1>{name}</h1>
                  <p className="coin-symbol">{symbol}</p>
              </div>
              <div className="coin-data">
                  
                  {priceChange < 0 ? (
                      <p className="coin-percent red">${price.toFixed(2)}</p>
                  ) : (<p className="coin-percent green">${price.toFixed(2)}</p>)
                  }
                  <p className="coin-volume">${volume.toLocaleString()}</p>
                  {priceChange < 0 ? (
                      <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                  ) : (<p className="coin-percent green">{priceChange.toFixed(2)}%</p>)
                  }
                  <p className="coin-marketcap"> Cap ${marketcap.toLocaleString()}</p>
              </div>
          </div>
        </div>
    )
}

export default Coin
