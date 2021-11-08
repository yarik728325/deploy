import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import tabs from "./tabs";

// eslint-disable-next-line import/no-anonymous-default-export
export default (history) => combineReducers({
  tabs,
  router: connectRouter(history),
});

