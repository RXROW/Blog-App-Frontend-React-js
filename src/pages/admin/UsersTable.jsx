import React from 'react';
import AdminSidbar from './AdminSidbar';
import { Link } from 'react-router-dom';
import './admin-taple.css'
import Swal from 'sweetalert2'


 
const UsersTable = () => {
  // Delete User Handler 
const deleteUserHandler = ()=>{
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
        <h1 className='table-title'>Users</h1>
        <table className='table'>
          <thead>
            <tr>
              <th>Count</th>
              <th>User</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {[1,2,3,4,5,6,7,8,9,10].map(item=>(
              <tr key={item}>
                <td>{item}</td>
                <td> 
                  <div className="table-iamge">
                    <img src="\images\user-avatar.png" 
                    className='table-user-image' alt="" />
                    <span className='username'>Eslam Ahmed</span>
                  </div>
                </td>
                <td>Eslamahmed@gmail.com</td>
                <td>
                  <div className="table-btn-group">
                    <button>
                      <Link  to={`/profile/1`}>
                          View Profile
                      </Link>
                    </button>
                    <button onClick={deleteUserHandler}>
                      Delete User
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

export default UsersTable;
