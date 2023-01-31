import { Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './pages/Home';
import Starred from './pages/Starred';

import './App.css';

function App() {
  return (
    <div>
      <Nav />

      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>

        <Route exact={true} path="/starred">
          <Starred />
        </Route>

        <Route>This is 404 Page</Route>
      </Switch>
    </div>
  );
}

export default App;
