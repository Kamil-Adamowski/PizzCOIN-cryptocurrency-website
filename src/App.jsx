import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/homePage'
import CoinPage from './pages/coinPage'
import Header from './components/header/header'

const App = () => (
  <Router>
    <>
      <Header />
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/coins/:id'>
            <CoinPage />
          </Route>
        </Switch>
    </>
  </Router>

);

export default App;
