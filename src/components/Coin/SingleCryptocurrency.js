import { FetchSingleCoin } from './fetchCoin/fetchSingleCoin'
import { useParams } from "react-router-dom";

const SingleCryptocurrency = () => {
  let { id } = useParams();
  const data = FetchSingleCoin(id).data
  console.log(data);
  return (
    <div className="pt-12">
      <h1 className="text-main" >{data.name}</h1>
      <h1 className="text-main" >Rank #{data.coingecko_rank}</h1>
      <div>
        <h3  className="text-main">reddit subscribers: {data.community_data.reddit_subscribers}</h3>
      </div>
      <div>
        <h3  className="text-main">Twitter followers: {data.community_data.twitter_followers}</h3>
      </div>
      <div>
        <h2  className="text-main">community_score: {data.community_score}</h2>
      </div>
      <div>
        <h2  className="text-main">genesis_date: {data.genesis_date}</h2>
      </div>
      <div>
        <h2  className="text-main">hashing_algorithm: {data.chashing_algorithm}</h2>
      </div>
      <div>
        <h2  className="text-main">last_updated: {data.last_updated}</h2>
      </div>
    </div>
  )
}

export default SingleCryptocurrency