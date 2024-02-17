import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostList from '../../components/posts/PostList';
import { posts } from '../../dummyData';
import './category.css';
const Category = () => {
  const { category } = useParams();
   useEffect(()=>{
    window.scrollTo(0,0);
   },[])
  return (
    <section className='category'>
      <h1 className='category-title'>Posts Based On {category}</h1>
      <PostList posts={posts} />
    </section>
  );
}

export default Category;