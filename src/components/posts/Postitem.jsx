import React from "react";
import { Link } from "react-router-dom";
import "./posts.css";
const Postitem = ({ post }) => {
  return (
    <div className="post-item">
      <div className="post-item-image-wrapper">
        <img src={post?.image.url} className="post-item-image" alt="" />
      </div>
      <div className="post-item-info-wrapper">
        <div className="post-item-info">
          <div className="post-item-author">
            <strong>Author: </strong>
            <Link className="post-item-username" to={`/profile/${post?.user._id}`}>
              {post?.user.username}
            </Link>
          </div>
          <div className="post-item-date">
            {new Date(post?.createdAt).toDateString()}
          </div>
        </div>
        <div className="post-item-details">
          <h4 className="post-item-title">{post?.title}</h4>
          <Link
            className="post-item-category"
            to={`/posts/categories/${post?.category}`}
          >
            {post?.category}
          </Link>
        </div>
        <p className="post-item-description">
          {post?.description}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, quasi
          commodi. Molestiae natus numquam, nobis eligendi incidunt ipsa
          officiis quis corrupti distinctio porro tempora aliquid? Veritatis qui
          animi blanditiis tempore. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Ex magni consectetur, aspernatur natus veniam
          ratione porro laborum amet minus nemo, aperiam asperiores recusandae
          distinctio iusto possimus fugit nulla molestias voluptates
          reprehenderit! Architecto quos perferendis deserunt in iste, expedita
          obcaecati itaque molestiae fugiat odio voluptatem alias ab? Labore,
          ducimus voluptatum iste sequi hic laudantium ipsam animi culpa fugit
          harum saepe ex magni recusandae odio excepturi aperiam molestias
          reiciendis minus blanditiis quos ab, obcaecati facere cum. Cum
          temporibus earum cumque blanditiis sequi. Minima reiciendis eius saepe
          vero exercitationem excepturi sint nihil unde at, quidem provident
          doloremque veniam quo! Quasi accusantium vel dicta!
        </p>
        <Link className="post-item-link" to={`/posts/details/${post?._id}`}>
          Read More...
        </Link>
      </div>
    </div>
  );
};

export default Postitem;
