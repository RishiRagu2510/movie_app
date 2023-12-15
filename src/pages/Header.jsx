import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import NavListItem from '../components/NavListItem';
import Search from '../components/Search';
import navListData from '../data/navListData';
import "./Header.css";

function Header() {
  const [active,setActive]=useState(false);
  const isActive =()=>{
    window.scrollY>0?setActive(true):setActive(false);
  }
  useEffect(()=>{
    window.addEventListener("scroll",isActive);
    return ()=>{
      window.removeEventListener("scroll",isActive)
    };
  },[]);
  return (
    <header className={active?'header active':'header'}>
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