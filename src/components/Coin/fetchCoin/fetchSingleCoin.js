import {useEffect, useState} from 'react'
import axios from "axios";

export const FetchSingleCoin = coin => {
  const [data, setData] = useState([])
  const API = `https://api.coingecko.com/api/v3/coins/${coin}`;

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