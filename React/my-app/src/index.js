import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Mailbox from './Mailbox';
import registerServiceWorker from './registerServiceWorker';


const messages = ['React', 'Re: React', 'Re:Re: React'];
// const messages = [];
ReactDOM.render(
    <Mailbox unreadMessages={messages} />,
    document.getElementById('root')
)

registerServiceWorker();
