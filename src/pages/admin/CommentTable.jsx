import React, { useEffect } from 'react';
import AdminSidbar from './AdminSidbar';
 
import './admin-taple.css'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCommment, fetchAllComments } from '../../redux/apiCalls/commetApiCall';

 
 
const CommentTable = () => {

  const dispatch = useDispatch();
  const {comments} = useSelector(state => state.comment);


  
  useEffect(() => {
    dispatch(fetchAllComments());
     
  }, []);



  // Delete Comment Handler 
const deleteCommentHandler = (commentId)=>{
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
      dispatch(deleteCommment(commentId))
    }
  });
}
 
  return (
    <section className="table-container">
      <AdminSidbar/>
      <div className="table-wrapper">
        <h1 className='table-title'>Comments</h1>
        <table className='table'>
          <thead>
            <tr>
              <th>Count</th>
              <th>User</th>
              <th>Comment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((item ,index  )=>(
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td> 
                  <div className="table-iamge">
                    <img src={item.user?.profilePhoto?.url}
                    className='table-user-image' alt="" />
                    <span className='username'>{item.user?.username}</span>
                  </div>
                </td>
                <td>{item.text}</td>
                <td>
                  <div className="table-btn-group">
                 
                    <button onClick={()=>deleteCommentHandler(item._id)}>
                      Delete Comment
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

export default CommentTable;
