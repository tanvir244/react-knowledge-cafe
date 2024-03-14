import PropTypes from 'prop-types';
import { IoBookmarks } from "react-icons/io5";

const Blog = ({blog, handleBookmark, handleReadingTime, handleBlogItem}) => {
    const {title, cover, reading_time, author, author_img, posted_date, hashtags} = blog;
    return (
        <div className='border-b-2 pb-4'>
            <img className='w-full h-[380px] object-cover' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center mt-2 mb-6'>
                <div className='flex items-center gap-4'>
                    <img className='w-16 h-16 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-lg'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <span className='text-lg'>{reading_time} min read</span>
                    <button onClick={() => {
                        handleBookmark(blog)
                        handleBlogItem(1)
                        }} className='text-2xl'><IoBookmarks /></button>
                </div>
            </div>
            <h1 className='text-3xl'>{title}</h1>
            <p className='mb-3'>
                {
                    hashtags.map((hashtag, idx) => <span key={idx} className='mr-2'><a href="">#{hashtag}</a></span>)
                }
            </p>
            <button onClick={() => handleReadingTime(reading_time)} className='text-red-400 font-bold'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func,
    handleReadingTime: PropTypes.func,
    handleBlogItem: PropTypes.func
}

export default Blog;