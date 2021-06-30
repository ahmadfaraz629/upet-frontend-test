import React, { Suspense, lazy } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import UserRoute from 'routes/UserRoute';
const RegisterRoutes = lazy(() => import('pages/Register'));

const RoutesHOC = (routes: any, DEFAULT_PATH: any) => {
  return function Component() {
    return (
      <Suspense fallback={<div></div>}>
        <Switch>
          {routes.map(route =>
            !route.isPrivate ? <UserRoute key={route.title} path={route.path} component={route.component} /> : <></>
          )}
          <Redirect to={DEFAULT_PATH} />
        </Switch>
      </Suspense>
    );
  };
};

export const dashboardRoutes = {};

export const routes = [
  {
    path: '/register',
    component: RegisterRoutes,
    isPrivate: false
  }
];

export const DEFAULT_PATH = '/register';

const AppRoutes = RoutesHOC(routes, DEFAULT_PATH);
export default AppRoutes;
