import PostList from '../../components/posts/PostList';
import Sidbar from '../../components/sidebar/Sidebar'
import './posts-page.css'
import Pagenation from '../../components/pagenation/Pagenation';
import { useEffect , useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts ,getPostCount } from '../../redux/apiCalls/postApiCall';
const POST_PER_PAGE = 4;

const Posts = () => {
  const [currentPage,setCurrentPage] = useState(1);
  const dispatch=useDispatch();
  const {postsCount ,posts} = useSelector(state=>state.posts);
  const  Pages = Math.ceil( postsCount / POST_PER_PAGE);
  useEffect(()=>{
    dispatch(getPostCount())
   
  },[dispatch])
  
  useEffect(()=>{
    dispatch(fetchPosts(currentPage))
     window.scrollTo(0,0)
  },[currentPage])

  return (
    <>
    <section className="post-page">
      <PostList posts={posts}/>
      <Sidbar />
    </section>
    <Pagenation Pages={Pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />

 
    </>
  );
}

export default Posts;
