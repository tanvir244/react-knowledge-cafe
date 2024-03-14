
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'


const Blogs = ({handleBookmark}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('../../../public/blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className="w-[70%] gap-4 space-y-14">
            {
                blogs.map(blog => <Blog 
                key={blog.id}
                blog={blog}
                handleBookmark={handleBookmark}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleBookmark: PropTypes.func
}

export default Blogs;