import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import propTypes from 'prop-types'
const Blogs = ({ handleAddBookmark, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      <h3>Blogs: {blogs.length}</h3>
      {
      blogs.map(blog => 
        <Blog
         key={blog.id}
         blog={blog}
         handleAddBookmark={handleAddBookmark}
         handleMarkAsRead={handleMarkAsRead}
         ></Blog>)
      }
    </div>
  );
};
Blogs.propTypes ={
  handleAddBookmark: propTypes.func,
  handleMarkAsRead: propTypes.func,
}
export default Blogs;
