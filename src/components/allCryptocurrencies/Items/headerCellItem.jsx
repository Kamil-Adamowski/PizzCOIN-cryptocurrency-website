export const HeaderCellItem = ({sortType, name}) => (
  <th class="p-3 font-black bg-secondary hidden lg:table-cell">
    <button
      className="text-main font-bold"
      type="button" 
      onClick={sortType}>
    {name}
    </button>
  </th>
);

export const HeaderCell = [
  {
    name: 'ID',
    sortType: 'market_cap_rank',
  },
  {
    name: 'Coin',
    sortType: 'id',
  },
  {
    name: 'Price',
    sortType: 'current_price',
  },
  {
    name: '24H%',
    sortType: 'price_change_percentage_24h',
  },
  {
    name: 'Volume(24h)',
    sortType: 'total_volume',
  },
  {
    name: 'Mkt Cap',
    sortType: 'market_cap',
  }
];