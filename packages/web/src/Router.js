import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import Home from './pages/home';
import SignIn from './pages/sign-in';

export default function Router() {
  return (
    <Switch>
      <Route exact path={['/', '']} component={Home} />
      <Route exact path="/sign-in" component={SignIn} />
    </Switch>
  );
}