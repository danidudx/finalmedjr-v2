// BlogDetail.js
const BlogDetail = ({ blog }) => {
  console.log("blog data",blog);
  const imgUrl = "/" + blog.thumbnail.replace(/\\/g, '/');

  return (
    <div className="blog-detail">
      <img src={imgUrl} alt={blog.title} />
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      
      <p>Date: {new Date(blog.date).toLocaleDateString()}</p>
    </div>
  );
};

export default BlogDetail;
