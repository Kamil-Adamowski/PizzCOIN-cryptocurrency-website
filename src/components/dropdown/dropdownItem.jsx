export const DropdownItem = ({sortType, name}) => (
  <button
    className="block p-3 text-sm text-main bg-primary border-secondary border hover:bg-secondary focus:outline-none "
    type="button" 
    onClick={sortType}
  >
    {name}
  </button>
)
