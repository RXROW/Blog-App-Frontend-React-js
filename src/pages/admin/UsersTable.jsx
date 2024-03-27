import React ,{useEffect} from 'react';
import AdminSidbar from './AdminSidbar';
import { Link } from 'react-router-dom';
import './admin-taple.css'
import Swal from 'sweetalert2'

import { useDispatch ,useSelector } from 'react-redux';

import { deleteProfile, getAllUsersProfiles } from '../../redux/apiCalls/profileApiCall';

const UsersTable = () => {
  const dispatch =useDispatch();
 const {profiles ,isProfileDeleted} = useSelector(state=>state.profile);
useEffect(() => {
 dispatch(getAllUsersProfiles());
 
}, [isProfileDeleted]);
  // Delete User Handler 
const deleteUserHandler = (userId)=>{
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
      dispatch(deleteProfile(userId))
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
            {profiles.map((item ,index)=>(
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td> 
                  <div className="table-iamge">
                    <img src={item?.profilePhoto?.url}
                    className='table-user-image' alt="" />
                    <span className='username'>{item.username}</span>
                  </div>
                </td>
                <td>{item.email}</td>
                <td>
                  <div className="table-btn-group">
                    <button>
                      <Link  to={`/profile/${item._id}`}>
                          View Profile
                      </Link>
                    </button>
                    <button onClick={()=>deleteUserHandler(item._id)}>
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
