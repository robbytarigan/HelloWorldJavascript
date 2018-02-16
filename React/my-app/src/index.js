import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Greeting from './Greeting';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <Greeting isLoggedIn={true}/>,
    document.getElementById('root')
)

registerServiceWorker();
