import React from 'react';
 
import './header.css'
const  Left = ({toggle , setToggle}) => {
  return (
    <div>
          <div className="header-left">
           
        <div className="hader-logo">
          <strong>BLOG </strong>
        <i class="bi bi-pencil"></i>
        </div>
     
        <div onClick={()=>setToggle(prev =>!prev)} className="header-menu">
      {toggle ? <i class="bi bi-x-lg"></i>: <i class="bi bi-list"></i> }

        </div>
      </div>
    </div>
  );
}

export default Left;
