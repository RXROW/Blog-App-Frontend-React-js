import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddCategoryForm from './AddCategoryForm';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCategories } from "../../redux/apiCalls/categoryApiCall"
import { getUsersCount } from '../../redux/apiCalls/profileApiCall';
import { getPostCount } from '../../redux/apiCalls/postApiCall';
import { fetchAllComments } from '../../redux/apiCalls/commetApiCall';

const AdminMain = () => {
  const dispatch = useDispatch();
  const {categories} = useSelector(state => state.category);
  const {usersCount} = useSelector(state => state.profile);
  const {postsCount} = useSelector(state => state.posts);
  const {comments} = useSelector(state => state.comment);


  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(getUsersCount());
    dispatch(getPostCount());
    dispatch(fetchAllComments());
  }, []);

  
  return (
    <div className='admin-main'>
      <div className="admin-main-header">
        <div className="admin-main-card">
          <h5 className="admin-main-title">Users</h5>
          <div className="admin-card-count">{usersCount || 0}</div>
          <div className="admin-card-link-wrapper">
            <Link to="/admin-dashbourd/users-table" className='admain-card-link'> See All Users </Link>
            <div className="admin-card-icon">
              <i className="bi bi-person"></i>
            </div>
          </div>
        </div>

        <div className="admin-main-card">
          <h5 className="admin-main-title">Posts</h5>
          <div className="admin-card-count">{postsCount || 0}</div>
          <div className="admin-card-link-wrapper">
            <Link to="/admin-dashbourd/posts-table" className='admain-card-link'> See All Posts </Link>
            <div className="admin-card-icon">
              <i className="bi bi-file-post"></i>
            </div>
          </div>
        </div>

        <div className="admin-main-card">
          <h5 className="admin-main-title">Categories</h5>
          <div className="admin-card-count">{categories ? categories.length : 0}</div>
          <div className="admin-card-link-wrapper">
            <Link to="/admin-dashbourd/categories-table" className='admain-card-link'> See All Categories </Link>
            <div className="admin-card-icon">
              <i className="bi bi-tag"></i>
            </div>
          </div>
        </div>

        <div className="admin-main-card">
          <h5 className="admin-main-title">Comments</h5>
          <div className="admin-card-count">{comments.length}</div>
          <div className="admin-card-link-wrapper">
            <Link to="/admin-dashbourd/comments-table" className='admain-card-link'> See All Comments </Link>
            <div className="admin-card-icon">
              <i className="bi bi-chat-left-text"></i>
            </div>
          </div>
        </div>
      </div>
      <AddCategoryForm />
    </div>
  );
}

export default AdminMain;
