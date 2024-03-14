import { useState } from 'react';
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmark = blog => {
    const newBookmark = [...bookmarks, blog]
    setBookmarks(newBookmark);
  }

  return (
    <>
      <div className='w-10/12 mx-auto'>
        <Header></Header>
        <div className='flex justify-between mt-6 mb-14'>
          <Blogs
            handleBookmark={handleBookmark}
          ></Blogs>
          <Bookmarks 
            bookmarks={bookmarks}
          ></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
