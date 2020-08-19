import React from 'react';
import './app.scss';
import { Link, HashRouter as Router } from 'react-router-dom';
import { menu } from './config';
import AppRoute from './route';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="left">
          {menu.map((item) => (
            <Link to={item.path}>{item.name}</Link>
          ))}
        </div>
        <div className="right">
          <AppRoute />
        </div>
      </div>
    </Router>
  );
}

export default React.memo(App);
