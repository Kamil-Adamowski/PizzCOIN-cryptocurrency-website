import { InfoItem } from '../InfoItem/InfoItem'

const GeneralInformatnion = ({
  name,
  symbol,
  image,
  liquidityScore,
  marketRank,
  communityScore,
  genesisDate,
  hashingAlgorithm,
  }) => (
  <div className=" bg-secondary w-full lg:w-2/3 2xl:w-1/3 flex-col md:flex-row flex p-4 justify-around items-center">
    <img src={image} alt={`icon ${name}`} />
    <div className="mt-10 lg:mt-0">
      <InfoItem 
        itemId={marketRank} 
        name='Rank: ' 
      />
      <InfoItem 
        itemId={communityScore} 
        name='Community score: ' 
      />
      <InfoItem 
        itemId={name} 
        name='Name: ' 
      />
      <InfoItem 
        itemId={symbol} 
        name='Symbol: ' 
      />
      <InfoItem 
        itemId={liquidityScore} 
        name='iquidity score: ' 
      />
      <InfoItem 
        itemId={genesisDate} 
        name='Genesis date: ' 
      />
      <InfoItem 
        itemId={hashingAlgorithm !== null ? hashingAlgorithm : '???'}
        name='Hashing algorithm: ' 
      />
    </div>
  </div>
)

export default GeneralInformatnion
