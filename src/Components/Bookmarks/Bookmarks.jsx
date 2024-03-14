import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';

const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="w-[25%] space-y-4">
            <div className="border border-red-200 p-4 text-center bg-red-200 rounded-lg">
                <h1 className="text-lg font-semibold">Spent time on read: 128 min</h1>
            </div>
            <div className="bg-[#1111110D] py-8 px-4 space-y-4 rounded-lg">
            <h1 className="text-lg font-semibold">Bookmarked Blogs : 8</h1>
            {
                bookmarks.map(bookmak => <Bookmark
                    key={bookmak.id}
                    bookmark={bookmak}
                ></Bookmark>)
            }
        </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired
}

export default Bookmarks;