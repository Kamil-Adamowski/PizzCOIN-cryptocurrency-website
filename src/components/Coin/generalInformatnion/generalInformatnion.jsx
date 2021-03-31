
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
      <h1 className="text-main pb-2">
        <strong>Rank: </strong>
        {marketRank}
      </h1>
      <h1 className="text-main pb-2">
        <strong>Community score: </strong> 
        {communityScore}
      </h1>
      <h1 className="text-main pb-2">
        <strong>Name: </strong> 
        {name}
      </h1>
      <h3 className="text-main pb-2">
        <strong>Symbol: </strong> 
        {symbol}
      </h3>
      <h3 className="text-main pb-2">
        <strong>Liquidity score: </strong> 
        {liquidityScore}
      </h3>
      <h3 className="text-main pb-2">
        <strong>Genesis date: </strong> 
        {genesisDate}
      </h3>
      <h3 className="text-main pb-2">
        <strong>Hashing algorithm: </strong>
        {hashingAlgorithm !== null ? hashingAlgorithm : <span>???</span>}
      </h3>
    </div>
  </div>
)

export default GeneralInformatnion
