import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/homePage'
import CoinPage from './pages/coinPage'
import Header from './components/header/header'
const App = () => (
  <Router>
    <div>
    <Header />
      <Switch>
        <Route path='/' exact><HomePage /></Route>
        <Route path='/coins/:id' exact><CoinPage /></Route>
      </Switch>
    </div>
  </Router>

);

export default App;
