import PropTypes from 'prop-types'

const Bookmark = ({ bookmark }) => {
    return (
        <div className="bg-white p-4 rounded-lg">
            <p>{bookmark.title}</p>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}

export default Bookmark;