import { Route, Switch } from 'react-router-dom'

import Header from "./assets/screens/Header";
import GroceryApp from "./assets/screens/GroceryApp";
import AboutUsPage from './assets/screens/AboutUsPage';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/"  exact>
          <GroceryApp />
        </Route>
        <Route path="/about-us">
          <AboutUsPage />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
