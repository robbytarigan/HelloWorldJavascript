import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

function formatDate(value) {
    return value.toLocaleString();
}

function Comment(props) {
    return (
      <div className="Comment">
        <UserInfo user={props.author} />
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }

  function UserInfo(props) {
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">
          {props.user.name}
        </div>
      </div>
    );
  }

  function Avatar(props) {
    return (
      <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
  
    );
  }

  const author = {
      name : 'Convenience',
      avatarUrl: 'https://www.npmjs.com/~zkat'
  }

ReactDOM.render(
    <Comment 
        author={author} 
        text='Test' 
        date={Date.now()} />,
    document.getElementById('root')
);

registerServiceWorker();
