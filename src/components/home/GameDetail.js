import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "./../constants/api";



export default function CharacterDetail(){
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
  <>
     <h1>{name}</h1>
     <img src={background_image}  alt={name}/>
     <div dangerouslySetInnerHTML={ {__html: description} } />
     <a href={website}> Website</a>
  </>

)



} /* CharacterDetail*/
