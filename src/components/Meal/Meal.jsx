import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';
const Meal = ({meal}) => {
    const navigate = useNavigate()
    const {id, name, email} = meal;

    const handleButtonClick = () =>{
        navigate(`/meal/${id}`)
    }

    return (
        <div className="border p-5">
            <h2 className="text-xl">{id}</h2>
            <p>Meals Name: {name}</p>
            <p>Meals Email: {email}</p>
            {/* <Link to={`/meal/${id}`}>See Details</Link> */}
            <button onClick={handleButtonClick} className='btn btn-primary'>Know More</button>
        </div>
    );
};


Meal.propTypes = {
    meal:PropTypes.string.isRequired
}

export default Meal;