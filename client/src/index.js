import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import App from './App';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <GoogleOAuthProvider clientId='311424798443-f0mbc3kp9hkgqcsecttujdgcrbqbr86k.apps.googleusercontent.com'>
  <Provider store = {store}>
      <App />
  </Provider>
  </GoogleOAuthProvider>,
document.getElementById('root'));
