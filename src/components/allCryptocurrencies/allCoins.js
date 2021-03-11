import { FetchCryptocurrency } from './fetchData/fetchData'
import CoinItem from './Items/CoinItem'
import { HeaderCell } from './Items/headerCellItem'
import { useSortableData } from './sortData/useSortableData'

const AllCoins = () => {
  const AllCoin = FetchCryptocurrency().data
  const { items, requestSort } = useSortableData(AllCoin);

  return (
    <div className="w-full flex flex-col items-center justify-center mt-16">
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
            name='24H'
          />
          <HeaderCell 
            sortType={() => requestSort('total_volume')} 
            name='24H Volume'
          />
          <HeaderCell 
            sortType={() => requestSort('market_cap')} 
            name='Mkt Cap'
          />
        </tr>
        </thead>
          <tbody>
          {items.map((coin, key) => 
            <CoinItem item={coin} />
          )}
          </tbody>
      </table>
    </div>
  )
}

export default AllCoins
