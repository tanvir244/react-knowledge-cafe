import { useState } from 'react';
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const [blogItem, setBlogItem] = useState(0);

  const handleBookmark = blog => {
    const newBookmark = [...bookmarks, blog]
    setBookmarks(newBookmark);
  }
  const handleReadingTime = time => {
    const newTime = readingTime + time;
    setReadingTime(newTime); 
  }
  const handleBlogItem = item => {
    const newItem = blogItem + item;
    setBlogItem(newItem);
  }

  return (
    <>
      <div className='w-10/12 mx-auto'>
        <Header></Header>
        <div className='flex justify-between mt-6 mb-14'>
          <Blogs
            handleBookmark={handleBookmark}
            handleReadingTime={handleReadingTime}
            handleBlogItem={handleBlogItem}
          ></Blogs>
          <Bookmarks 
            bookmarks={bookmarks}
            readingTime={readingTime}
            blogItem={blogItem}
          ></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
