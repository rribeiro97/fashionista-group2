import React from 'react';

import { Link } from 'react-router-dom';
import { RiSearchLine } from 'react-icons/ri'
import { FiShoppingBag } from 'react-icons/fi'
import './TopBar.scss';

const Topbar = () => (
  <header className="topbar">
    <nav className="header">
        <div className="container header__display">
            <div className="header__img">
              <img src="https://static.dafiti.com.br/images/kanui/logo-kanui.png" alt="logo"/>
            </div>

            <div className="header__icons">
              <RiSearchLine />
              <FiShoppingBag />
            </div>
        </div>         
    </nav>
  </header>
);

export default Topbar;
