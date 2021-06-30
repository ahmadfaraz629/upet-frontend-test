import React, { FC } from 'react';
import { Provider } from 'react-redux';
import configureStore from 'store';
import { Router } from 'react-router-dom';
import Routes from 'routes';
import history from 'utils/history';

// Import scss
import './App.scss';

export const store = configureStore();
const App: FC = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
