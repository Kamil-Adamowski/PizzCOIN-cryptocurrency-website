import { useState } from 'react'
import { FetchCryptocurrency } from './fetchData/fetchData'
import CoinItem from './Items/CoinItem'
import { HeaderCell } from './Items/headerCellItem'
import { useSortableData } from './sortData/useSortableData'
import{ Dropdown, DropdownItem} from '../dropdown/dropdown'

const AllCoins = () => {
  const [currency, setCurrency] = useState('USD')
  const AllCoin = FetchCryptocurrency(currency).data
  const { items, requestSort } = useSortableData(AllCoin);
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)

  const filteredCoins = items.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  const array = [
    {

      name:'usd',
      asd: 'usd'
    },
    {
      name:'pln',
      asd: 'pln'
    },
    {
      name:'btc',
      asd: 'btc'
    },
    {
      name:'eur',
      asd: 'eur'
    },
  ]

  return (
    <div className="w-full flex flex-col items-center justify-center absolute mt-16 bg-primary">
      <div className="flex justify-between sm:w-full md:w-4/5 lg:w-3/5">
        <Dropdown 
          open={open}
          btnName={currency}
          setOpen={() => setOpen(true)}
          close={() => setOpen(false)}
        >
        {array.map(e => 
          <DropdownItem name={e.name} sortType={() => setCurrency(e.asd)} />
        )}
        </Dropdown>
        <input 
          type='text'
          placeholder='Search'
          onChange={e => setSearch(e.target.value)}
          className="bg-gradient-to-br from-gradientPurple  to-gradientBlue text-xl text-main placeholder-white w-64 h-14 p-3 rounded-lg outline-none "
        />
      </div>
      <table class="border-collapse sm:w-full md:w-4/5 lg:w-3/5">
        <thead className="border-b-8 border-primary">
        <tr>
          <HeaderCell 
            sortType={() => requestSort('market_cap_rank')} 
            name='ID'
          />
          <HeaderCell 
            sortType={() => requestSort('id')} 
            name='Coin'
          />
          <HeaderCell
            sortType={() => requestSort('current_price')} 
            name='Price'
          />
          <HeaderCell 
            sortType={() => requestSort('price_change_percentage_24h')} 
            name='24H%'
          />
          <HeaderCell 
            sortType={() => requestSort('total_volume')} 
            name='Volume(24h)'
          />
          <HeaderCell 
            sortType={() => requestSort('market_cap')} 
            name='Mkt Cap'
          />
        </tr>
        </thead>
          <tbody>
          {filteredCoins.map((coin, key) => 
            <CoinItem currency={currency} item={coin} />
          )}
          </tbody>
      </table>
    </div>
  )
}

export default AllCoins

