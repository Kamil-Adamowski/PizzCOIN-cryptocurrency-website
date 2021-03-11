import { Link } from 'react-router-dom'

const CoinItem = ({item: {id, name, image, symbol, market_cap_rank, current_price, market_cap,total_volume, price_change_percentage_24h}}) => {
  return (
    <tr className=" bg-secondary sm:border-b  lg:border-b-8 border-primary lg:hover:bg-primary flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-5 lg:mb-0">
      <td className="w-full flex justify-center items-center lg:w-auto p-3 text-gray-800 text-center lg:table-cell relative lg:static">
        <p className="text-main ">{market_cap_rank}</p>
      </td>
      <td className="w-full lg:w-auto p-3 text-gray-800 text-center lg:table-cell relative lg:static">
        <div className="w-full flex justify-around items-center">
          <img className="w-12 m-0" src={image} alt={`Failed to load ${name} logo`} />
          <Link to={`/coins/${id}`} className=" w-32" >
            <h3 className="text-main">{name}</h3>
          </Link>
          <h3 className="text-main w-10 text-right">{symbol}</h3>
        </div>
      </td>
      <td className="w-full lg:w-auto p-3 text-gray-800 text-center lg:table-cell relative lg:static">
        <h3 className="text-special" >${current_price}</h3>
      </td>
      <td className="w-full lg:w-auto p-3 text-gray-800 flex justify-center items-center lg:table-cell relative lg:static">
        {price_change_percentage_24h < 0
          ? <p className=" text-priceDrop text-center">{price_change_percentage_24h.toFixed(2)}%</p>
          : <p className=" text-priceIncrease text-center">{price_change_percentage_24h.toFixed(2)}%</p>
        }
      </td>
      <td className="w-full lg:w-auto p-3 text-gray-800 lg:table-cell relative lg:static">
        <h3 className="text-main text-center">${total_volume.toFixed(2)}</h3>
      </td>
      <td className="w-full lg:w-auto p-3 text-gray-800 flex justify-center items-center lg:table-cell relative lg:static">
        <p className="text-main text-center">${market_cap.toLocaleString()}</p>
      </td>
    </tr>
  )
}

export default CoinItem

/*
    <div  className="mt-2">
      <div className=" flex items-center w-full h-20 justify-center  rounded-md">
        <div className="flex items-center justify-between mr-10 w-5/12">
          <p className="text-main w-8">{market_cap_rank}</p>
          <img className="w-12" src={image} alt={`Failed to load ${name} logo`} />
          <Link to={`/coins/${id}`} className=" w-32" >
            <h3 className="text-main">{name}</h3>
          </Link>
          <h3 className="text-main w-10 text-right">{symbol}</h3>
        </div>
        <div className="flex items-center justify-between w-5/12 ml-20">
          <h3 className="text-special w-20" >${current_price}</h3>
          <p className="text-main w-36">${market_cap.toLocaleString()}</p>
          {price_change_percentage_24h < 0
            ? <p className=" text-priceDrop w-14 text-right">{price_change_percentage_24h.toFixed(2)}%</p>
            : <p className=" text-priceIncrease w-14 text-right">{price_change_percentage_24h.toFixed(2)}%</p>
          }
        </div>
      </div>
    </div>
*/