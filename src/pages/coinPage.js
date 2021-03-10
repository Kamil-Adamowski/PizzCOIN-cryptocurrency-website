import '../App.css';
import Header from '../components/header/header'
import SingleCryptocurrency from '../components/Coin/SingleCryptocurrency'

const CoinPage = () => (
    <div className=" bg-primary" >
      <Header />
      <SingleCryptocurrency />
    </div>
);

export default CoinPage
