import { InfoItem } from '../InfoItem/InfoItem'

const CommunityData = ({
  fbLikes,
  twitterFollowers,
  telegramUsers,
  redditSub,
  redditAveragePosts,
  redditAverageComments,
  redditAccountsActive 
  }) => (
    <div className='bg-secondary w-full lg:w-1/2 2xl:w-1/3 p-4'>
      <InfoItem 
        itemId={fbLikes} 
        name='Facebook Likes : ' 
      />
      <InfoItem 
        itemId={twitterFollowers} 
        name='Twitter Followers : ' 
      />
      <InfoItem 
        itemId={telegramUsers} 
        name='Telegram channel user count : ' 
      />
      <InfoItem 
        itemId={redditSub} 
        name='Reddit subscribers : ' 
      />
      <InfoItem 
        itemId={redditAveragePosts} 
        name='reddit Average Posts (48h) : ' 
      />
      <InfoItem 
        itemId={redditAverageComments} 
        name='Reddit Average Comments (48h) : ' 
      />
      <InfoItem 
        itemId={redditAccountsActive} 
        name='Reddit Accounts Active (48h) : ' 
      />
    </div>
  )

export default CommunityData
