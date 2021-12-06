import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FilterComponent from './Components/FilterComponent';
import TweetdisplayComponent from './Components/TweetdisplayComponent';
import TweetdataComponent from './Components/TweetdataComponent';
import GlobalVisualComponent from './Components/GlobalVisualComponent';
import HomeComponent from './Components/HomeComponent';
import Example from './Components/TestTweetComponent';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <HomeComponent/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
