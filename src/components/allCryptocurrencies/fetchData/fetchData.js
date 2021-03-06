import {useEffect, useState} from 'react'
import axios from "axios";

export const FetchCryptocurrency = currency => {
  const [data, setData] = useState([])
  const API = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=150&page=1&sparkline=true`;

  useEffect(
    () => {
      const FetchData = async () => {
        const result = await axios(API)
          .then(coin => setData(coin.data))
        return result
      };
      return FetchData();
    },[API])

  return { data }
}