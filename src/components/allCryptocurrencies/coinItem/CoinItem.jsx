import { Link } from 'react-router-dom'

const CoinItem = ({item: {name, image, symbol, current_price, market_cap, price_change_percentage_24h, marketCap}}) => (
    <div  className="border-b-2 border-primary">
      <div className=" flex items-center w-full justify-center mt-5 mb-5">
        <div className="flex items-center justify-between w-60 mr-10">
          <div className="flex items-center justify-between">
            <img className="w-12" src={image} alt={`Failed to load ${name} logo`} />
            <Link to={`/coins/${name.toLowerCase().replace(/\s/g, '-').replace(/\./g,"-")}`} >
              <h3 className="text-main ml-8">{name}</h3>
            </Link>
          </div>
          <p className="text-main">{symbol}</p>
        </div>
        <div className="flex items-center justify-between w-72 ml-2">
          <h3 className="text-main" >${current_price}</h3>
          <p className="text-main">${market_cap.toLocaleString()}</p>
          {price_change_percentage_24h < 0 
            ? <p className=" text-priceDrop">{price_change_percentage_24h.toFixed(2)}%</p>
            : <p className=" text-priceIncrease">{price_change_percentage_24h.toFixed(2)}%</p>
          }
        </div>
      </div>
    </div>
  )

export default CoinItem
