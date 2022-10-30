import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './Redux/Reducers';
import thunk from 'redux-thunk';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer,compose(applyMiddleware(thunk)));

root.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>
);


