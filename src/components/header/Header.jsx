import React from 'react';
import { useState } from 'react';
import './header.css'
import Left from './Left';
import Navbar from './Navbar';
import Right from './Right';
 
const Header = () => {

  const [toggle, setToggle] = useState(false);
  const [navBar, setNavBar] = useState(false);

  const changeBack=()=>{
    if(window.scrollY >=50){
      setNavBar(true)
    }else{
      setNavBar(false)
    }
  }
  window.addEventListener("scroll",changeBack);
  return (
     <header className={navBar? "header active" :"header" }>
      <Left toggle={toggle } setToggle={setToggle}/>
      <Navbar  toggle={toggle } setToggle={setToggle}/>
      <Right/>
     </header>
  );
}

export default Header;
