import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
   const {id, title} = post;
    return (
        <div className='border p-5 card-body'>
            <p className='text-xl'>User Id: {id}</p>
            <p>Post Title: {title}</p>
            <Link to={`/post/${id}`}>
                <button className='btn btn-primary'>See Details</button>
            </Link>
        </div>
    );
};

Post.propTypes = {
    post:PropTypes.string.isRequired
}

export default Post;