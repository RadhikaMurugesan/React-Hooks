import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import RouteNav from '../src/config/RouteNav';
import sourceReducer from "../src/reducers/reducers"

const store = createStore(sourceReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
   <RouteNav/>
   </Provider>, document.getElementById('root')
);

