// import { useState } from "react";
import "../Components/Blog-preview.style.scss";
import {Link} from 'react-router-dom';

const BlogPreview = ({ blogs }) => {
  return (
    <article>
      {blogs.map((blog) => (
          
        <div
          className="blog-preview-container"
          key={blog.id}
        >
          <div className="image" 
          style={{ 
            backgroundImage: `url(${blog.image})` 
          }}
          >
          </div>
          <div className="content">
            <h1>{blog.title}</h1>
            <p>Written By {blog.author}</p>

        
            <Link to = {`/blogs/${blog.id}`}>Read More</Link>
            
          </div>
        </div>
      ))}
    </article>
  );
};

export default BlogPreview;
