import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import Auth from './Auth'

const style = {
    color: 'black',
    fontWeight: 'bold'
};

const Nav=()=>{
  return(
      <nav>
          <NavLink exact activeStyle={style} to="/">Home</NavLink>
          <NavLink activeStyle={style} to="/about">About</NavLink>
          <NavLink activeStyle={style} to="/contact">Contact</NavLink>
          {Auth.isLogIn && <NavLink activeStyle={style} to='/logout'>Logout</NavLink>}
      </nav>
  );
};
export default Nav;