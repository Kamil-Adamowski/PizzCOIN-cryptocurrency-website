import React from 'react'
import { FetchCryptocurrency } from './fetchData/fetchData'
import CoinItem from './coinItem/CoinItem'

const AllCoins = () => {
  const data = FetchCryptocurrency().data
  console.log(data)
  return (
    <div className="w-full flex items-center justify-center mt-16">
      <div className="w-1/3 flex flex-col">
        {data.map(coin => <CoinItem item={coin} /> )}
      </div>
    </div>
  )
}

export default AllCoins
