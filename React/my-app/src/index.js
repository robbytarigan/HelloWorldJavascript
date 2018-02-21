import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page from './WarningBanner';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <Page />,
    document.getElementById('root')
)

registerServiceWorker();
