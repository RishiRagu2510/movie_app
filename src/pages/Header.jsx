import React from 'react';
import Button from '../components/Button';
import NavListItem from '../components/NavListItem';
import Search from '../components/Search';
import navListData from '../data/navListData';
import "./Header.css";

function Header() {
  return (
    <header>
    <a href="/" className="logo">
        StarFlix
    </a>
    <ul className="nav">
    {navListData.map(nav => (
            <NavListItem key={nav._id} nav={nav}/>
        ))}
    </ul>
    <Search />
    <Button icon={<ion-icon name="log-in-outline"></ion-icon>}
    name='Sign in'
    />
    </header>
  )
}

export default Header