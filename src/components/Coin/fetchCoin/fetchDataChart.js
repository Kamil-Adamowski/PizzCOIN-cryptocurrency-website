import {useEffect, useState} from 'react'
import axios from "axios";

export const FetchDataChart = (coin) => {
  const [data, setData] = useState([])
  const API = `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=7&interval=daily`;

  useEffect(
    () => {
      const FetchData = async () => {
        const result = await axios(API)
          .then(coin => setData(coin.data))
        return result
      };
      FetchData();
    },[API])

return { data }
}