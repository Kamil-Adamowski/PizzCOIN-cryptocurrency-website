export const HeaderCell = ({sortType, name}) => (
  <th class="p-3 font-bold uppercase bg-secondary text-main hidden lg:table-cell">
    <button type="button" onClick={sortType}>
      {name}
    </button>
  </th>
)
