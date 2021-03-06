import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Coin from './Coin';
import './App.css';



function App() {
  const [coins, setCoins]= useState([]);
  const [search, setSearch]= useState('');

useEffect (()=>{
  axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false')
  .then(res => {
    setCoins (res.data);
  
  })
  .catch(error => console.log(error));
},[]);
const handleChange = e => {
  setSearch(e.target.value)
}
const filteredCoins= coins.filter ( coin =>
  coin.name.toLowerCase().includes(search.toLowerCase())

)

  return (
    <div className="coin-app">
      <div className="coin-search">
      
        <form>
          <input type="text" placeholder="Tìm kiếm cryptocurrency" className="coin-input" onChange={handleChange}/>
        </form>
      </div>
       {filteredCoins.map ((coin) => {
         return (
           <Coin 
           rank={coin.market_cap_rank}
           key={coin.id}
           name={coin.name} 
           image={coin.image}
           price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}

           />

         )
       })}
    </div>
  )
}

export default App
