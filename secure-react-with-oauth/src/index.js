import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Auth from './Auth';

const auth = new Auth();

let state = {};
window.setState = (changes) => {
  state = Object.assign({}, state, changes);

  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
      <App {...state}/>
  );
}

let username = auth.getProfile().given_name || "";

/* eslint no-restricted-globals: 0*/
let initialState = {
  name: username,
  location: location.pathname.replace(/^\/?|\/$/g,""),
  auth
};

window.setState(initialState);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
