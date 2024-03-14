import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';

const Bookmarks = ({ bookmarks, readingTime, blogItem }) => {
    return (
        <div className="w-[25%] space-y-4">
            <div className="border border-red-200 p-4 text-center bg-red-200 rounded-lg">
                <h1 className="text-lg font-semibold">Spent time on read: {readingTime} Min</h1>
            </div>
            <div className="bg-[#1111110D] py-8 px-4 space-y-4 rounded-lg">
            <h1 className="text-lg font-semibold">Bookmarked Blogs : {blogItem}</h1>
            {
                bookmarks.map((bookmak, idx) => <Bookmark
                    key={idx}
                    bookmark={bookmak}
                ></Bookmark>)
            }
        </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number,
    blogItem: PropTypes.number
}

export default Bookmarks;