// BlogDetail.js
const BlogDetail = ({ blog }) => {
  console.log("blog data",blog);
  const imgUrl = "/" + blog.thumbnail.replace(/\\/g, '/');

  return (
    <div className="blog-detail">
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <img src={imgUrl} alt={blog.title} />
      <p>Date: {new Date(blog.date).toLocaleDateString()}</p>
    </div>
  );
};

export default BlogDetail;
