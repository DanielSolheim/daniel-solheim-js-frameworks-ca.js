import React from 'react';
import {BASE_URL} from './../constants/api.js';
import {useState, useEffect} from "react";
import GameItem from './GameItem';
import SearchGames from './SearchGames';




export default function Home(){


     //setting states for inital render and search
    const [games, setGames] = useState([]);
    const [filteredGames, setFilteredGames] = useState([]);



    //Search Function for GameItem Containers
    var filterGames = function(e){
      //convert value of input to lower case
      const searchValue = e.target.value.toLowerCase();

      //filtering games
      const filteredArray = games.filter(function(gameName){
         const lowerCaseName = gameName.name.toLowerCase();
            // Return only the games that match input
            if(lowerCaseName.match(searchValue)){
              return true
            }
         return false
      });
      //passing the values of filtered games to filteredArray
      setFilteredGames(filteredArray);
    };


    useEffect(function(){
      fetch(BASE_URL)
          .then(function(response){
             return response.json();
          })
          .then(function(json){
            setGames(json.results)
            setFilteredGames(json.results)
          })
          .catch(function(error){
            console.log(error)
          });
    }, []);


       return (
        <>
        <SearchGames handleSearch={filterGames} />
         <div className="Home">

           {filteredGames.map(function(game){
             const {name,id,background_image, rating, released} = game;

             return(
               <GameItem
                  name={name}
                  background_image={background_image}
                  key={id}
                  rating={rating}
                  released={released}
                  id={id}
                  />
             )
           })}
         </div>
       </>
       );
}
