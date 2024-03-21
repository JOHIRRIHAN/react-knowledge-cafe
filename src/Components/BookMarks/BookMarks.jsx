
import propTypes from 'prop-types';
import BookMark from '../BookMark/BookMark';

const BookMarks = ({bookmarks}) => {
  return (
    <div className="md:w-1/3 bg-gray-300 rounded-xl ml-4 mt-2 pt-4">
        <h3 className="text-3xl text-center ">BooksMark Blogs:  {bookmarks.length}</h3>
        {
          bookmarks.map(bookmark => <BookMark key={bookmark.id} bookmark={bookmark}></BookMark>)
        }
    </div>
  );
};
BookMarks.propTypes ={
  bookmarks: propTypes.array,
};
export default BookMarks;