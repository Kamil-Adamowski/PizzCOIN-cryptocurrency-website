import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { FetchCryptocurrency } from './fetchData/fetchData'
import CoinItem from './Items/CoinItem'
import { HeaderCellItem, HeaderCell } from './Items/headerCellItem'
import { useSortableData } from './sortData/useSortableData'
import{ Dropdown } from '../dropdown/dropdown'
import CurrencySelection from './currencySelection/currencySelection'

const AllCoins = () => {

  const [currencyLimit, setCurrencyLimit] = useState(50)
  //current currency selsection
  const [currency, setCurrency] = useState('USD')
  // fetched currency Data
  const FetchedData = FetchCryptocurrency(currency).data
  // sorted  fetched data
  const { items, requestSort } = useSortableData(FetchedData);
  // currency search in data
  const [search, setSearch] = useState('')
  // open/close dropdown
  const [open, setOpen] = useState(false)
  
  // all cryptocurrencies with live search and sort
  const AllCryptocurrencies = items.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  ).slice(0, currencyLimit)

  return (
    <div className="w-full flex flex-col items-center justify-center absolute mt-16 bg-primary">
      <div className="flex flex-col-reverse md:justify-between md:flex-row sm:w-full md:w-4/5 lg:w-3/5 mb-8">
        <Dropdown
          open={open}
          btnName={currency.toUpperCase()}
          setOpen={() => setOpen(true)}
          setClose={() => setOpen(false)}
        >
          <CurrencySelection setCurrency={setCurrency} />
        </Dropdown>
        <div className="flex justify-start items-center">
        <BsSearch className="absolute w-6 h-auto ml-3 text-main pb-7 lg:pb-0"/>
        <input
          type='text'
          placeholder='Search'
          onChange={e => setSearch(e.target.value)}
          className="bg-gradient-to-br from-gradientPurple  to-gradientBlue text-xl text-main placeholder-white w-64 p-3 h-14 pl-12 rounded-lg outline-none mb-8 lg:mb-0"
        />
        </div>
      </div>
      <table class="border-collapse sm:w-full md:w-4/5 lg:w-3/5">
        <thead className="border-b-8 border-primary">
        <tr>
        {HeaderCell.map(cell => 
          <HeaderCellItem 
            sortType={() => requestSort(cell.sortType)} 
            name={cell.name}
          />
        )}
        </tr>
        </thead>
          <tbody>
          {AllCryptocurrencies.map((coin, key) => 
            <CoinItem key={key} currency={currency} item={coin} />
          )}
          </tbody>
      </table>
      <button onClick={()=> setCurrencyLimit(currencyLimit + 10)} class="bg-gradient-to-br from-gradientPurple  to-gradientBlue text-xl text-main w-64 h-14 p-3 rounded-lg focus:outline-none">Load More Coin</button>
    </div>
  )
}

export default AllCoins

