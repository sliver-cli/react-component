import React from 'react';
import './index.scss';
import logo from '../../assets/logo.png';

const BasicHeader = () => (
  <div className="header-wrapper">
    <div className="header-main">
      <img src={logo} alt="logo" className="logo" />
      <div className="header-menu">
        <div>
          <span>导航</span>
        </div>
        <div>
          <span>导航</span>
        </div>
        <div>
          <span>导航</span>
        </div>
      </div>
    </div>
  </div>
);

export default BasicHeader;
