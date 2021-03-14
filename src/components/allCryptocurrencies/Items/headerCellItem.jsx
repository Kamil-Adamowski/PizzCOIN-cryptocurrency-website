export const HeaderCell = ({sortType, name}) => (
  <th class="p-3 font-black bg-secondary hidden lg:table-cell">
    <button
      className="text-main font-bold"
      type="button" 
      onClick={sortType}>
    {name}
    </button>
  </th>
)
