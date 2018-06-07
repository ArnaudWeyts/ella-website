import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Demo from './Demo';

const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/demo" component={Demo} />
    </React.Fragment>
  </Router>
);

export default App;
