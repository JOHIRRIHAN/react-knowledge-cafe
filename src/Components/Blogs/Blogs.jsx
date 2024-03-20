import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import propTypes from 'prop-types'
const Blogs = ({ handleAddBookmark }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      <h3>Blogs: {blogs.length}</h3>
      {blogs.map((blog) => (
        <Blog key={blogs.id}
         blog={blog}
         handleAddBookmark={handleAddBookmark}
         ></Blog>
      ))}
    </div>
  );
};
Blogs.propTypes ={
  handleAddBookmark: propTypes.func
}
export default Blogs;
