import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const IndividualBlogPage = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();
  

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/blogs/${id}`)
        .then((response) => {
          setBlog(response.data);
        })
        .catch((error) => {
          console.error('API error:', error);
        });
    }
  }, [id]);
  
  const imgUrl = blog ? "/" + blog.thumbnail.replace(/\\/g, '/') : null;
  console.log('blog:', blog);
  console.log('imgUrl:', imgUrl);
  

  return (
    <div className="individual-blog-page">
      {blog ? (
        <div className="blog-det">
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <img src={imgUrl} alt={blog.title} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default IndividualBlogPage;
