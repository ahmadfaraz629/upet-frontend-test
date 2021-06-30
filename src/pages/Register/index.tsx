import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Register from 'components/Register'

const RegisterRoutes = ({ match: { url } }) => (
  <Switch>
    <Route path={`${url}`} exact component={Register} />
    <Redirect to={`${url}`} />
  </Switch>
);

export default RegisterRoutes;
