import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './Nav';
import Addition from './Addition';
import MainOperators from './MainOperators';
import TwoWay from './TwoWayBindingMain';
import ReadJSON from './ReadJSON';

function Routing() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add" component={Addition} />
          <Route path="/two_components" component={MainOperators} />
          <Route path="/two_way" component={TwoWay} />
          <Route path="/read_json" component={ReadJSON} />
        </Switch>
      </div>
    </Router>
  )
}

function Home() {
  return (
    <div className="home-msg">Welcome to React Apps</div>
  )
}

export default Routing;