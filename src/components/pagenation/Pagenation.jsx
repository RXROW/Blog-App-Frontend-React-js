import React from 'react';
import './Pagenation.css'
const Pagenation = () => {
  return (
    <div className='pagenation'>
      <div className="page prev">previes</div>
      {[1,2,3,4,5].map(page=>(
        <div key={page} className='page'>
          {page}
        </div>
      ))}
      
      <div className="page next">next</div>

      
    </div>
  );
}

export default Pagenation;
