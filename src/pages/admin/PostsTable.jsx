import React from 'react';
import AdminSidbar from './AdminSidbar';
import { Link } from 'react-router-dom';
import './admin-taple.css'
import Swal from 'sweetalert2'
import { posts } from '../../dummyData';


 
const PostsTable = () => {
  // Delete Post Handler 
const deletePostHandler = ()=>{
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
        <h1 className='table-title'>Posts</h1>
        <table className='table'>
          <thead>
            <tr>
              <th>Count</th>
              <th>User</th>
              <th>Post Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((item ,index)=>(
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td> 
                  <div className="table-iamge">
                    <img src="\images\user-avatar.png" 
                    className='table-user-image' alt="" />
                    <span className='username'>{item.user.username}</span>
                  </div>
                </td>
                <td>{item.title}</td>
                <td>
                  <div className="table-btn-group">
                    <button>
                      <Link  to={`/posts/details/${item._id}`}>
                          View Post
                      </Link>
                    </button>
                    <button onClick={deletePostHandler}>
                      Delete Post
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

export default PostsTable;
