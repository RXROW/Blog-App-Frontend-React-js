import PostList from '../../components/posts/PostList';
import Sidbar from '../../components/sidebar/Sidebar'
import './posts-page.css'
import {posts, categories} from '../../dummyData'
import Pagenation from '../../components/pagenation/Pagenation';
import { useEffect } from 'react';
const Posts = () => {
  useEffect(()=>{
     window.scrollTo(0,0)
  },[])
  return (
    <>
    <section className="post-page">
      <PostList posts={posts}/>
      <Sidbar categories={categories}/>
    </section>
    <Pagenation/>

 
    </>
  );
}

export default Posts;
