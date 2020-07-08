import React, { useCallback } from 'react';

import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/cart';
import { RiSearchLine } from 'react-icons/ri';
import { FiShoppingBag } from 'react-icons/fi';
import './TopBar.scss';
import Search from '../Search';
import { useState } from 'react';


const Topbar = () => {
  const { openCart, openSearch, totalItensInCart } = useCart();

  return (
    <header className="topbar">
      <nav className="header">
        <div className="container header__display">
        <Link to={'/'} >
          <div className="header__img">
            <img
              src="/assets/img/amarologo.png"
              alt="logo"
            />
          </div>
        </Link>
          <div className="header__icons">
            <RiSearchLine onClick={() => openSearch()} />
            {totalItensInCart > 0 && (
              <span className="header__count">{totalItensInCart}</span>
            )}

            <FiShoppingBag onClick={() => openCart()} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Topbar;
