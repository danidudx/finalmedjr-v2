// BlogsPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from '../BlogCard/index';
import './BlogsPage.css';
import BannerSectionStyle3 from '../Section/BannerSection/BannerSectionStyle3';
import Header from '../Header';
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
      <Header />
      <BannerSectionStyle3
        bgUrl="/images/about/banner_bg.svg"
        imgUrl="/images/about/banner_img.png"
        title="Improve your knowledge<br> and Health"
        subTitle="Your Partner in Health and Wellness"
      />
      <div className="blog-cards">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
