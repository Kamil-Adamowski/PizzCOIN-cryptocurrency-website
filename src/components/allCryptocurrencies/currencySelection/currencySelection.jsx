import { FetchSupportedCurrencies } from '../fetchData/fetchSupportedCurrencies'
import{ DropdownItem } from '../../dropdown/dropdownItem'

const CurrencySelection = ({setCurrency}) => {
  // assignment data 
  const fetchedCurrencyData = FetchSupportedCurrencies().data

  // changing each item from the array to an object
  const AllFetchedCurrencies = fetchedCurrencyData.map(e => JSON.parse(JSON.stringify({name: e})))

  // return of the map of all currencies
  return AllFetchedCurrencies.map(e => <DropdownItem name={e.name.toUpperCase()} sortType={() => setCurrency(e.name)} />)

}

export default CurrencySelection
