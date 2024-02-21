import React from 'react';
import { Link } from 'react-router-dom';
const AdminSidbar = () => {
  return (
    <div className='admin-sidbar'>
     <Link to="/admin-dashbourd" className="admin-sidbar-title">
      <i className="bi bi-columns"></i>
      Dashboard 
     </Link>
     <ul className="admin-dashboard-list">
      <Link className="admin-sidbar-link"  to="/admin-dashbourd/users-table">
        <i className="bi bi-person"></i>
        Users
      </Link>
      <Link className="admin-sidbar-link" to="/admin-dashbourd/posts-table">
        <i className="bi bi-file-post"></i>
        Posts
      </Link>
      <Link className="admin-sidbar-link" to="/admin-dashbourd/categories-table">
        <i className="bi bi-tag"></i>
        Categories
      </Link>
      <Link className="admin-sidbar-link" to="/admin-dashbourd/comments-table">
        <i className="bi bi-chat-left-text"></i>
        Comments
      </Link>
     </ul>
    </div>
  );
}

export default AdminSidbar;
