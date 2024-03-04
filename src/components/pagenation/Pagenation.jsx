import React from 'react';
import './Pagenation.css'
const Pagenation = ({Pages,currentPage,setCurrentPage}) => {
  let genratedPages= [] ;
  let pagesNumber = parseInt(Pages);
  for (let i = 1; i <= pagesNumber; i++) {
    genratedPages.push(i);
 
  }
  return (
    <div className='pagenation'>
      <button className="page prev  " 
      onClick={()=>setCurrentPage(prev=>prev - 1)} 
      disabled={currentPage === 1}
      >Previes</button>
      {genratedPages.map(page => (
        <div onClick={() => setCurrentPage(page)} key={page} 
        className={currentPage === page ? "page active" : "page" } >
          {page}
        </div>
      ))}

<button className="page next  " 
      onClick={()=>setCurrentPage(prev=>prev + 1)} 
      disabled={currentPage === 1}
      >Next</button>

      
    </div>
  );
}

export default Pagenation;
