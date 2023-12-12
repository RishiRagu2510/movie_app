import React from 'react'
import "./search.css"
const Search = () => {
  return (
    <div className="search"> 
    <input type="text" placeholder="search" />
    <ion-icon name="search-outline"></ion-icon>
    </div>
  );
}

export default Search;