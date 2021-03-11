import './App.css';
import {useState,useEffect} from 'react';
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TeamDetail from './Components/TeamDetail/TeamDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
          <Home></Home>
          </Route>

          <Route exact path="/">
          <Home />
          </Route>

          <Route path="/team/:teamId">
            <TeamDetail></TeamDetail>
          </Route>

        <Route path="*">
          <NoMatch></NoMatch>
        </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
