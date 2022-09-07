import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './index.css';

ReactDom.render(
  <Router>
    <App />
  </Router>,
  document.querySelector('#root')
);
