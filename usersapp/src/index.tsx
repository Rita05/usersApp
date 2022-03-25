import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UsersListReducer } from './components/userslist/reducer'
import {UserProfileReducer} from './components/userprofile/reducer'

import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
  UsersListReducer,
  UserProfileReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);