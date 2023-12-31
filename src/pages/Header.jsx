import React, { useState } from 'react';
import Button from '../components/Button';
import NavListItem from '../components/NavListItem';
import Search from '../components/Search';
import navListData from '../data/navListData';
import "./Header.css";

function Header({scroll}) {
  const[navList,setNavList]=useState(navListData)
  const handleNavOnClick=id=>{
    const newNavList=navList.map(nav=>{
      nav.active=false;
      if(nav._id==id)nav.active=true;
      return nav;
    });
  }
  return (
    
    <header className={`${scroll>1?'scrolled':undefined}`}>
    <a href="/" className="logo">
        StarFlix
    </a>
    <ul className="nav">
    {navList.map(nav => (
            <NavListItem key={nav._id} nav={nav} navOnClick={handleNavOnClick} />
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