import React from 'react'
import Header from '../Header'
import BlogForm from '../BlogDashboard';
import './blogdash.css';

const BlogDashPage = () => {
  return (
    <div className='BlogDashPage'>
        <Header />
        <div className='bform'>
            <h1>Create a New Blog Post</h1>
        <BlogForm /></div>
    </div>
  )
}

export default BlogDashPage