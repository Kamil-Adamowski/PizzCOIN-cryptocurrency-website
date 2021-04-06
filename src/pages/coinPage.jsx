import { useParams } from "react-router-dom";
import {
  FetchSingleCoin,
  CoinChart,
  GeneralInformatnion,
  AllLinks,
  CommunityData
} from '../components/Coin/SingleCryptocurrency'

const CoinPage = () => { 
  let { id } = useParams();
  const data = FetchSingleCoin(id).data

return (
  <div className=" bg-primary w-full min-h-screen h-auto ">
    <div className="pt-12 w-full flex flex-col justify-center items-center ">
      <div className='flex justify-center w-full flex-col lg:flex-row'>
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
      <div className='flex justify-center w-full flex-col lg:flex-row'>
        {data.community_data !== undefined && <CommunityData 
          fbLikes={data.community_data.facebook_likes}
          twitterFollowers={data.community_data.twitter_followers}
          telegramUsers={data.community_data.telegram_channel_user_count}
          redditSub={data.community_data.reddit_subscribers}
          redditAveragePosts={data.community_data.reddit_average_posts_48h}
          redditAverageComments={data.community_data.reddit_average_comments_48h}
          redditAccountsActive={data.community_data.reddit_accounts_active_48h}
          />}
        {data.links !== undefined && <AllLinks 
          blockchainSite={data.links.blockchain_site}
          homepage={data.links.homepage}
          officialForum={data.links.official_forum_url}
          reposGit={data.links.repos_url.github}
          subreddit={data.links.subreddit_url} 
          />}
      </div>
    </div>
  </div>
);
}
export default CoinPage
