import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Demo from './Demo';

const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
      <Route path={`${process.env.PUBLIC_URL}/demo`} component={Demo} />
    </React.Fragment>
  </Router>
);

export default App;
