import {useEffect, useState} from 'react'
import axios from "axios";

export const FetchSupportedCurrencies = () => {
  const [data, setData] = useState([])
  const API = `https://api.coingecko.com/api/v3/simple/supported_vs_currencies`;

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