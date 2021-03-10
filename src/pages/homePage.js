import '../App.css';
import Header from '../components/header/header'
import AllCoins from '../components/allCryptocurrencies/allCoins'

const HomePage = () => (
    <div className=" bg-primary " >
      <Header />
      <AllCoins />
    </div>
);

export default HomePage
