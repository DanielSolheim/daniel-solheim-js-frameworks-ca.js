import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";

import Home from './../home/Home.js';
import Contact from './../contact/Contact.js'
import GameDetail from './../home/GameDetail.js'



export default function Layout(){
  return (
    <Router>
     <div className="Layout">
       <nav className="navBar">


          <div className="navLinks">
             <NavLink className="navLink navLink--home" to="/">  Home </NavLink>
             <NavLink className="navLink navLink--contact" to="/contact">  Contact </NavLink>
          </div>
       </nav>

       <Switch>
             <Route path="/" exact component={Home}/>
             <Route path="/contact" component={Contact} />
             <Route path="/game/:id" component={GameDetail} />
      </Switch>

     </div>
    </Router>


  );

}
