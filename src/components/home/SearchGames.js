import React from 'react';
import PropTypes from 'prop-types';

export default function SearchGames({handleSearch}){
  return (
  <div className="SearchGames">
     <input className="search" placeholder="search by title........" onChange={event => handleSearch(event)} / > 
  </div>
  );
}


SearchGames.porpTypes = {
  handleSearch: PropTypes.func.isRequired,
}
