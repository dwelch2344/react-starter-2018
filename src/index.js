import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import 'react-table/react-table.css'

import './assets/css/animate.min.css'
import './assets/css/light-bootstrap-dashboard.css'
import './assets/css/pe-icon-7-stroke.css'

import './assets/sass/app.scss'

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
