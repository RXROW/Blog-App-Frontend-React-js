import React from 'react';
import { useState } from 'react';
import './header.css'
import Left from './Left';
import Navbar from './Navbar';
import Right from './Right';
const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
     <header className="header">
      <Left toggle={toggle } setToggle={setToggle}/>
      <Navbar  toggle={toggle } setToggle={setToggle}/>
      <Right/>
     </header>
  );
}

export default Header;
