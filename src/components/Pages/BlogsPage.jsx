// BlogsPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from '../BlogCard/index';
import './BlogsPage.css';
const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from the server when the component mounts
    axios.get('http://localhost:8080/blogs').then((response) => {
      setBlogs(response.data);
    });
  }, []);

  return (
    <div className="blogs-page">
      <h1>All Blogs</h1>
      <div className="blog-cards">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
