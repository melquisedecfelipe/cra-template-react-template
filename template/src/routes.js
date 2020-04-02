import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  );
}
