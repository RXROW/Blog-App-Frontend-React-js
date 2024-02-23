import React from 'react';
import { useSelector  } from "react-redux";

import { Link } from 'react-router-dom'
const Navbar = ({toggle,setToggle}) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div  className="navbar" style={{clipPath : toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)"}}>
    <ul className="nav-links">
      <Link to="/"  onClick={()=>setToggle(false)} className="nav-link">
        <i className="bi bi-house"></i> Home
      </Link>
      <Link to="/posts" onClick={()=>setToggle(false)}  className="nav-link">
        <i className="bi bi-stickies"></i> Posts
      </Link>
      {user && (  <Link to="/posts/create-post" onClick={()=>setToggle(false)}  className="nav-link">
        <i className="bi bi-journal-plus"></i> Craete
      </Link>)}

      {user?.isAdmin && (  <Link to="/admin-dashbourd" onClick={()=>setToggle(false)}  className="nav-link">
        <i className="bi bi-person-check"></i> Admin Dashbourd
      </Link>  )}
    
    
    </ul>



  </div>
  );
}

export default Navbar;
