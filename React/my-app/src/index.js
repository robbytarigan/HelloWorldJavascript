import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Page from './WarningBanner';
// import registerServiceWorker from './registerServiceWorker';
import listItems from './MultipleComponents';

ReactDOM.render(
    <ul>{listItems}</ul>,
    document.getElementById('root')
  );