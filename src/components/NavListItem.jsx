import React from 'react'
import "./navListitem.css"
const NavListItem = ({nav}) => {
  return (
    <li>
    <a href={nav.link}>{nav.name}</a>
    </li>
  )
}

export default NavListItem