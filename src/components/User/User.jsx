import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const User = ({users}) => {
    const { id, name, phone, company } = users;
    return (
        <div className='card-body border w-96'>
            <p>User Id:{id}</p>
            <p>User Name:{name}</p>
            <p>Use Phone:{phone}</p>
            <p>User Company Name: {company.name}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
            <Link to={`/users/${id}`}>
                <button className='btn btn-primary'>Click Me</button>
            </Link>
        </div>
    );
};


User.propTypes = {
    users: PropTypes.object.isRequired
}

export default User;