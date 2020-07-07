import React, { useCallback } from 'react';

import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/cart';
import { RiSearchLine } from 'react-icons/ri';
import { FiShoppingBag } from 'react-icons/fi';
import './TopBar.scss';
import Search from "../Search";
import { useState } from "react";

// const Topbar = () => {
//   const [showSearch, setShowSearch] = useState(false);

const Topbar = () => {
  const { openCart, totalItensInCart } = useCart();

  return (
    <header className="topbar">
      <nav className="header">
        <div className="container header__display">
          <div className="header__img">
            <img
              src="https://static.dafiti.com.br/images/kanui/logo-kanui.png"
              alt="logo"
            />
          </div>

          <div className="header__icons">
            <RiSearchLine />
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
