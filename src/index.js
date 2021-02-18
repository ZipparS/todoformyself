import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from "history/createBrowserHistory";

import { App } from './App';
import reducers from './reducers';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

const ROOT = document.getElementById('root');
const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(reducers, composeWithDevTools(applyMiddleware(middleware)));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <Router>
            <App />
        </Router>
    </ConnectedRouter>
  </Provider>,
  ROOT);
registerServiceWorker();
