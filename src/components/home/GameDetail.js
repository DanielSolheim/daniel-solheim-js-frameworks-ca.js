import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "./../constants/api";



export default function GameDetail(){
  const [detail, setDetail] = useState([]);

let {id} = useParams();

let url = BASE_URL + '/' + id;


useEffect(() => {
    fetch(url)
      .then(result => result.json())
      .then(data => setDetail(data))
      .catch(error => console.log(error))

}, [url])

const {name, background_image, description, website} = detail;


return (
  <div className="CharacterDetail">
     <h1  className="detail--title">{name}</h1>
     <img className="detail--image" src={background_image}  alt={name}/>
     <form  className="detail--link"action={website} >
        <button className="detail--link__button" type="submit"> See website</button>
    </form>
     <div className="detail--description" dangerouslySetInnerHTML={ {__html: description} } />

  </div>

)



} /* CharacterDetail*/
