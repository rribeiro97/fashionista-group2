import React from 'react';
import { RiSearchLine } from 'react-icons/ri'
import { FiShoppingBag } from 'react-icons/fi'
import './TopBar.scss';
import Search from "../Search";
import { useState } from "react";

const Topbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
  <header className="topbar">
    <nav className="header">
        <div className="container header__display">
            <div className="header__img">
              <img src="https://static.dafiti.com.br/images/kanui/logo-kanui.png" alt="logo"/>
            </div>
            <div className="header__icons">
              <button className="button__icons">
                <RiSearchLine size={20} className="search-icon" 
                onClick={() => setShowSearch(!showSearch)} />
                { showSearch ? <Search /> : null }
              </button>
                <FiShoppingBag />
            </div>
        </div>         
    </nav>
  </header>
  )
};

export default Topbar;
