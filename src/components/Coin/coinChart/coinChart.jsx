
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

const CoinChart = ({sparkData}) => (
  <div className='w-full lg:w-1/3 border-4 border-secondary p-4'>
    <h1 className="text-main pb-14">Trading View (7 days)</h1>
    <Sparklines data={sparkData} >
      <SparklinesLine color='#ebb44d' />
      <SparklinesSpots style={{ fill: "#ebb44d" }} size={2} />
    </Sparklines>
  </div>
)

export default CoinChart
