import React, { useEffect } from 'react';
import AdminSidbar from './AdminSidbar';
 
import './admin-taple.css'
import Swal from 'sweetalert2'
import { useDispatch , useSelector } from 'react-redux';
import {deleteCategory, fetchCategories} from "../../redux/apiCalls/categoryApiCall"

  

 
const CategoriesTable = () => {
  const dispatch =useDispatch();
  const {categories} = useSelector(state => state.category)
  useEffect(() => {
    dispatch( fetchCategories());
       
    }, [ ]);
  // Delete Post Handler 
const deleteCategoryHandler = (categoruId)=>{
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
      dispatch(deleteCategory(categoruId))
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
            {categories.map((item , index)=>(
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td> 
                 <b>{item.title}</b>
                </td>
               
                <td>
                  <div className="table-btn-group">
               
                    <button onClick={()=>deleteCategoryHandler(item._id)}>
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
