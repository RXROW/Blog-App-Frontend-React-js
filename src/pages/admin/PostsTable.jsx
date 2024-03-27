import React ,{useEffect}from 'react';
import AdminSidbar from './AdminSidbar';
import { Link } from 'react-router-dom';
import './admin-taple.css'
import Swal from 'sweetalert2'
 
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts  , deletePost} from '../../redux/apiCalls/postApiCall';
 
const PostsTable = () => {
  const dispatch = useDispatch();
  const {posts} = useSelector(state => state.posts);
  useEffect(() => {
    dispatch(getAllPosts());
  }, []); 

  // Delete Post Handler 
const deletePostHandler = (postId)=>{
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
      dispatch(deletePost(postId))
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
                    <img src={item.user?.profilePhoto?.url}
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
                    <button onClick={()=>deletePostHandler(item._id)}>
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
