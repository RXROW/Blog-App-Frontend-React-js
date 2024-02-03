import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = ({toggle,setToggle}) => {
  return (
    <div  className="navbar" style={{clipPath : toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)"}}>
    <ul className="nav-links">
      <Link to="/"  onClick={()=>setToggle(false)} className="nav-link">
        <i className="bi bi-house"></i> Home
      </Link>
      <Link to="/posts" onClick={()=>setToggle(false)}  className="nav-link">
        <i className="bi bi-stickies"></i> Posts
      </Link>
      <Link to="/posts/create-post" onClick={()=>setToggle(false)}  className="nav-link">
        <i className="bi bi-journal-plus"></i> Craete
      </Link>
      <Link to="/admin-dashbourd" onClick={()=>setToggle(false)}  className="nav-link">
        <i className="bi bi-person-check"></i> Admin Dashbourd
      </Link>
    </ul>



  </div>
  );
}

export default Navbar;
