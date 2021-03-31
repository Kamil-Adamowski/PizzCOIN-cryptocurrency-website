import {useEffect, useState} from 'react'
import axios from "axios";

export const FetchSingleCoin = coin => {
  const [data, setData] = useState([])
  const API = `https://api.coingecko.com/api/v3/coins/${coin}?localization=en&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`;

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