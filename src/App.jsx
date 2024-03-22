
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'
import Header from './Components/Header/Header'
import propTypes from 'prop-types'
function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleAddBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (id,time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    const remainingBookMark= bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookMark)
  }
  return (
    <>
     <Header></Header>
     <div className='md:flex max-w-5xl mx-auto'>
     <Blogs handleAddBookmark={handleAddBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
     <BookMarks bookmarks={bookmarks} readingTime={readingTime}></BookMarks>
     </div>
     
    </>
  )
}
App.propTypes ={
  blog: propTypes.func,
}
export default App;
