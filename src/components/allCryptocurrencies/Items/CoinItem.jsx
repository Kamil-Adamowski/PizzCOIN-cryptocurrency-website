import { Link } from 'react-router-dom'
import { BsFillCaretUpFill,BsFillCaretDownFill } from 'react-icons/bs'

const CoinItem = ({currency, item: {id, name, image, symbol, market_cap_rank, current_price, market_cap,total_volume, price_change_percentage_24h}}) => (
    <tr className="bg-secondary sm:border-t lg:border-t-2 border-primary lg:hover:bg-primary flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-5 lg:mb-0">
      <td className="w-full flex justify-center items-center lg:w-auto p-3 text-gray-800 text-center lg:table-cell relative lg:static">
        <p className="text-main font-semibold">
          {market_cap_rank}
        </p>
      </td>
      <td className="w-full lg:w-1/4 p-3 lg:table-cell relative lg:static">
        <Link to={`/coins/${id}`} className="w-full flex flex-col justify-center md:flex-row  md:justify-between lg:justify-start items-center">
          <img className="w-12 h-12" src={image} alt={`Failed to load ${name} logo`}/>
          <div  className=" lg:pl-8 mt-2 md:mt-0">
            <h3 className="text-main text-left font-medium">
              {name}
            </h3>
          </div>
          <h3 className="text-main mt-2 md:mt-0 md:ml-4 text-left font-medium opacity-50">
            {symbol.toUpperCase()}
          </h3>
        </Link>
      </td>
      <td className="w-full lg:w-1/12 p-3 flex items-center justify-center lg:table-cell relative lg:static">
        <h3 className="text-special text-left w-auto lg:pr-11 lg:pl-12">
          {current_price.toLocaleString('en-US', { style: 'currency', currency: `${currency.toUpperCase()}`})}
        </h3>
      </td>
      <td className="w-full lg:w-auto p-3 lg:table-cell relative lg:static">
        {price_change_percentage_24h < 0
          ? <div className="flex items-center justify-center text-priceDrop">
              <BsFillCaretDownFill className='mr-2'/>
              <p className=" text-priceDrop">
                {price_change_percentage_24h.toFixed(2)}%
              </p>
            </div>
          : <div className="flex items-center justify-center text-priceIncrease">
              <BsFillCaretUpFill className='mr-2'/>
              <p className=" text-priceIncrease">
                {price_change_percentage_24h.toFixed(2)}%
              </p>
          </div>
        }
      </td>
      <td className="w-full lg:w-auto p-3 lg:table-cell flex justify-center items-center relative lg:static">
        <h3 className="text-main text-left lg:pl-14">
          {total_volume.toLocaleString('en-US', { style: 'currency', currency: `${currency.toUpperCase()}`})}
        </h3>
      </td>
      <td className="w-full lg:w-auto p-3 flex justify-center items-center lg:table-cell relative lg:static">
        <p className="text-main text-left lg:pl-12">
          {market_cap.toLocaleString('en-US', { style: 'currency', currency: `${currency.toUpperCase()}`})}
        </p>
      </td>
    </tr>
)
export default CoinItem
