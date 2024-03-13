
import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('../../../public/blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div>
            <h1>blogs here</h1>
        </div>
    );
};

export default Blogs;