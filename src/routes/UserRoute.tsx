import React from 'react';
import { Route } from 'react-router';

const UserRoute = ({ component, ...rest }) => {
  const routeComponent = props => React.createElement(component, props);
  return <Route {...rest} render={routeComponent} />;
};

export default UserRoute;
