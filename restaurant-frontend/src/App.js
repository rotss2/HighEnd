import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Reservation from './pages/Reservation';
import Queue from './pages/Queue';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/reservation" component={Reservation} />
          <Route path="/queue" component={Queue} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;