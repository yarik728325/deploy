import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import 'regenerator-runtime/runtime';
import history from './utils/routing';
import createStore from './redux/createStore';
import App from './components/App';
import './style.css'

const { store, persistor } = createStore(history);

ReactDOM.render(
  <Provider store={store}>
       <PersistGate persistor={persistor}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
