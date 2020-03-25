import React from 'react';
import {Link } from 'react-router-dom';
import PropTypes from 'prop-types';


export default function GameItem({name, id, background_image, rating, released}){

return (
  <div className="game" key={id}>

     <h1 > {name} </h1>

   <div className="game--imgcontainer" >
      <img src={background_image} alt={name}/ >

      <div className="game--rating">
        <img src="./images/star.svg" alt={name} />
        <p> {rating} </p>
      </div>

      <p className="game--released"> <b>Released: </b> <br/> {released} </p>
    </div>   





     <Link className="game--link"to={"game/" + id}>
        <button className="game--button " >
          View
        </button>
     </Link>

  </div>
)


}


GameItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  background_image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  released: PropTypes.string.isRequired,
}
