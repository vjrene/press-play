import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/main.css';
import './styles/css/vendor/font-awesome.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <App />
</HashRouter>, document.getElementById('root'));
registerServiceWorker();
