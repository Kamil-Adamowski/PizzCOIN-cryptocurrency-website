import { FetchSingleCoin } from './fetchCoin/fetchSingleCoin'
import CoinChart from './coinChart/coinChart'
import { useParams } from "react-router-dom";
import GeneralInformatnion from './generalInformatnion/generalInformatnion'
import AllLinks from './allLinks/allLinks'
const SingleCryptocurrency = () => {
  let { id } = useParams();
  const data = FetchSingleCoin(id).data
  console.log(data);

  return (
    <div className="pt-12 w-full flex flex-col justify-center items-center ">
        <div className='flex justify-center w-full'>
        {data.image !== undefined && 
          <GeneralInformatnion 
            name={data.name}
            symbol={data.symbol}
            image={data.image.large}
            liquidityScore={data.liquidity_score}
            marketRank={data.market_cap_rank}
            communityScore={data.community_score}
            genesisDate={data.genesis_date}
            hashingAlgorithm={data.hashing_algorithm}
        />
        }
        {data.market_data !== undefined && <CoinChart sparkData={data.market_data.sparkline_7d.price} />}
      </div>
      <div className='flex justify-center w-full'>
      {data.links !== undefined && <AllLinks 
        blockchainSite={data.links.blockchain_site}
        homepage={data.links.homepage}
        officialForum={data.links.official_forum_url}
        reposGit={data.links.repos_url.github}
        subreddit={data.links.subreddit_url} />}
      </div>
    </div>
  )
}

export default SingleCryptocurrency