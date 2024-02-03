import Postitem from './Postitem'; 

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.map(item=> <Postitem post={item} key={item._id}/>)}
     
    </div>
  );
}

export default PostList;
