// BlogCard.js

import React from 'react';

const BlogCard = ({ blog }) => {
  console.log('blogid', blog._id);
  console.log('thumbnail', blog.thumbnail);
  const imgUrl = "/" + blog.thumbnail.replace(/\\/g, '/');
  console.log('imgUrl',imgUrl);

  return (
    <div className="blog-card">
      <h2>{blog.title}</h2>
      <p>{blog.content.substring(0, 150)}...</p>
      {/* <img src={blog.thumbnail.replace(/\\/g, '/')} alt={blog.title} /> */}
      <img src={imgUrl} alt={blog.title} />
      {/* <img src='imageoftest.jpg' /> */}
      <a href={`/blog/${blog._id}`}>Read more</a>
    </div>
  );
};

export default BlogCard;
