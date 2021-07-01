import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Register from 'components/Register';
import { ReceivedApplicationContainer } from './containers';

const RegisterRoutes = ({ match: { url } }) => (
  <Switch>
    <Route path={`${url}/success`} exact component={ReceivedApplicationContainer} />
    <Route path={`${url}`} exact component={Register} />
    <Redirect to={`${url}`} />
  </Switch>
);

export default RegisterRoutes;
