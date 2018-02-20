import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

axios.defaults.baseURL = 'https://www.reddit.com/r/analog/top';
//axios.defaults.headers.common['Authorization'] = "Friends ONLY";
axios.defaults.headers.post['WASS'] = " UP !";

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
