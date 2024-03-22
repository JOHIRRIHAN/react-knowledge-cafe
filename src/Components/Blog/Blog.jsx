import PropTypes from "prop-types";
import { CiBookmarkPlus } from "react-icons/ci";

const Blog = ({ blog, handleAddBookmark, handleMarkAsRead }) => {
  const {
    title,
    cover,
    reading_time,
    author_img,
    author,
    posted_date,
    hashtags,
    id,
    
  } = blog;
  return (
    <div className="mb-20 space-y-5">
      <img
        className="w-full mb-8 rounded-xl"
        src={cover}
        alt={`cover picture of the title${title}`}
      />
      <div className="flex justify-between">
        <div className="flex">
          <img className="w-12" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-xl font-semibold">{author}</h3>
            <h3 className="">{posted_date}</h3>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button
            onClick={()=>handleAddBookmark(blog)}
            className="ml-2 text-2xl text-red-600"
          >
            <CiBookmarkPlus />
          </button>
        </div>
      </div>
      <h3 className="text-3xl font-bold py-5">Title: {title}</h3>
      <p>
        {hashtags.map((hash, indx) => (
          <span key={indx}>
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
      <button
      className="text-purple-700 font-semibold underline"
      onClick={()=>handleMarkAsRead(id,reading_time)}
      >Mark As Read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blog;
