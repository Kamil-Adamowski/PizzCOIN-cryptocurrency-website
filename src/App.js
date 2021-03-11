import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/homePage'
import CoinPage from './pages/coinPage'

const App = () => (
  <Router>
    <Switch>
      <Route path='/' exact><HomePage /></Route>
      <Route path='/coins/:id' exact><CoinPage /></Route>
    </Switch>
  </Router>
);

export default App;
