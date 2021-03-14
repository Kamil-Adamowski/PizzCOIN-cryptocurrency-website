import { FetchSingleCoin } from './fetchCoin/fetchSingleCoin'
import { useParams } from "react-router-dom";

const SingleCryptocurrency = () => {
  let { id } = useParams();
  const data = FetchSingleCoin(id).data
  console.log(data);
  return (
    <div className="mt-16">
      <h1 className="text-main" >{data.name}</h1>
      <h1 className="text-main" >Rank #{data.coingecko_rank}</h1>
    </div>
  )
}

export default SingleCryptocurrency
/*
import { FetchDataChart } from './fetchCoin/fetchDataChart'
  console.log(data);
  console.log();

  const array = FetchDataChart(id).data.prices
  array.map(e => console.log(e[0]))
*/