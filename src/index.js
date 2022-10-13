import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import user from './components/profile/user.json'

import { App } from './components/App';
import { Profile } from './components/profile/profile';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        />
    </App>
  </React.StrictMode>
);
