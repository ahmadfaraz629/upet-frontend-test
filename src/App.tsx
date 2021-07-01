import React, { FC } from 'react';
import { Provider } from 'react-redux';
import configureStore from 'store';
import { HashRouter } from 'react-router-dom';
import Routes from 'routes';
import history from 'utils/history';

export const store = configureStore();
const App: FC = () => {
  return (
    <Provider store={store}>
      <HashRouter history={history}>
        <Routes />
      </HashRouter>
    </Provider>
  );
};

export default App;
