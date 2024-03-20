
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'
import Header from './Components/Header/Header'
import propTypes from 'prop-types'
function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const handleAddBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
  return (
    <>
     <Header></Header>
     <div className='md:flex max-w-5xl mx-auto'>
     <Blogs handleAddBookmark={handleAddBookmark}></Blogs>
     <BookMarks></BookMarks>
     </div>
     
    </>
  )
}
App.propTypes ={
  blog: propTypes.func,
}
export default App
