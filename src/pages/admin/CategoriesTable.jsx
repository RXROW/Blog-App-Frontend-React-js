import React from 'react';
import AdminSidbar from './AdminSidbar';
import { Link } from 'react-router-dom';
import './admin-taple.css'
import Swal from 'sweetalert2'
import { posts } from '../../dummyData';
  

 
const CategoriesTable = () => {
  // Delete Post Handler 
const deleteCategoryHandler = ()=>{
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  });
}
 
  return (
    <section className="table-container">
      <AdminSidbar/>
      <div className="table-wrapper">
        <h1 className='table-title'>Categories</h1>
        <table className='table'>
          <thead>
            <tr>
              <th>Count</th>
              <th>Category Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {[1,2,3,4,5].map((item)=>(
              <tr key={item}>
                <td>{item}</td>
                <td> 
                 <b>Programming</b>
                </td>
               
                <td>
                  <div className="table-btn-group">
               
                    <button onClick={deleteCategoryHandler}>
                      Delete Category
                    </button>


                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </section>
   
     
  );
}

export default CategoriesTable;
