import React from 'react';

import './styles/header.css';
import '../Components/HeaderMenu/styles.css';
import { Logo } from '../Components/Logo/Logo';
import { HeaderMenu } from '../Components/HeaderMenu/HeaderMenu';
import person from '../Images/user.svg';
import hamburger from '../Images/hamburger.svg';

export function AppHeader({ handleVisible }) {
  return (
    <header>
      <button className="header-button">
        <img src={hamburger} alt="hamburger" onClick={handleVisible} />
      </button>
      <Logo />
      <HeaderMenu />
      <button className="header-button">
        <img src={person} alt="person" />
      </button>
    </header>
  );
}
