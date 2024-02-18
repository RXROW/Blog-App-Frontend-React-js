import React from 'react';
import { Link } from 'react-router-dom';
import AddCategoryForm from './AddCategoryForm';
const AdminMain = () => {
  return (
    <div className='admin-main'>
      <div className="admin-main-header">
        <div className="admin-main-card">
          <h5 className="admin-main-title">Users</h5>
          <div className="admin-card-count">20  </div>
          <div className="admin-card-link-wrapper">
            <Link to="/admin-dashboard/users-table"
            className='admain-card-link'> See All Users </Link>
            <div className="admin-card-icon">
            <i className="bi bi-person"></i>
            </div>
          </div>

        </div>
        <div className="admin-main-card">
          <h5 className="admin-main-title">Posts</h5>
          <div className="admin-card-count">120  </div>
          <div className="admin-card-link-wrapper">
            <Link to="/admin-dashboard/posts-table"
            className='admain-card-link'> See All Posts </Link>
            <div className="admin-card-icon">
            <i className="bi bi-file-post"></i>
            </div>
          </div>

        </div>
        <div className="admin-main-card">
          <h5 className="admin-main-title">Categories</h5>
          <div className="admin-card-count">4  </div>
          <div className="admin-card-link-wrapper">
            <Link to="/admin-dashboard/categories-table"
            className='admain-card-link'> See All Categories </Link>
            <div className="admin-card-icon">
            <i className="bi bi-tag"></i>
            </div>
          </div>

        </div>
        <div className="admin-main-card">
          <h5 className="admin-main-title">Comments</h5>
          <div className="admin-card-count">10  </div>
          <div className="admin-card-link-wrapper">
            <Link to="/admin-dashboard/comments-table"
            className='admain-card-link'> See All Comments </Link>
            <div className="admin-card-icon">
            <i className="bi bi-chat-left-text"></i>
            </div>
          </div>

        </div>
 
      </div>
      <AddCategoryForm/>
      
 
    </div>
  );
}

export default AdminMain;
