import React from 'react';
import './Coin.css';


const Coin=({name, image,price,priceChange, rank }) => {
    return (
        <div className="coin-container">
          <div className="coin-row">
              <div className="coin">
                  <p className="coin-rank">{rank}</p>
                  <img src={image} alt="crypto"/>
                  <h1>{name}</h1>
                 
              </div>
              <div className="coin-data">
                  
                  {priceChange < 0 ? (
                      <p className="coin-percent red">${price.toFixed(2)}</p>
                  ) : (<p className="coin-percent green">${price.toFixed(2)}</p>)
                  }
                  
                  {priceChange < 0 ? (
                      <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                  ) : (<p className="coin-percent green">{priceChange.toFixed(2)}%</p>)
                  }
                  
              </div>
          </div>
        </div>
    )
}

export default Coin
