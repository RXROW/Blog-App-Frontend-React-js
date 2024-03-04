import React, { useEffect } from 'react';
import { useParams ,Link } from 'react-router-dom';
import PostList from '../../components/posts/PostList';
 import './category.css';
import { useDispatch, useSelector } from 'react-redux'
import { fetchPostsBasedOnCategory } from '../../redux/apiCalls/postApiCall';
const Category = () => {
  const dispatch=useDispatch();
  const {postsCat} = useSelector(state=>state.posts);

  const { category } = useParams();
   useEffect(()=>{
    dispatch(fetchPostsBasedOnCategory(category))
    window.scrollTo(0,0);
   },[category])
  return (
    <section className='category'>
      {postsCat.length === 0? 
    <>
    <h1 className='category-title'>Sorry Posts Based On {category} Not Found ! </h1>
    <h1 className='category-title'>    <Link to={"/"}>Go To Home Page</Link></h1>
    </>  
    :
    <>
      <h1 className='category-title'>Posts Based On {category}</h1>
      <PostList posts={postsCat} />
    </>
    }
  
    </section>
  );
}

export default Category;