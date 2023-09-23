import { useLoaderData, useNavigate } from "react-router-dom";

const MealsDetails = () => {
    const meal = useLoaderData()
    const navigate = useNavigate()
    const {id, name} = meal;
    const handleBackButton = () => {
        navigate(-1)
    }
    return (
        <div className="card-body">
            <h2 className="text-2xl">{id}</h2>
            <h3 className="text-xl">Meal Name:{name}</h3>
            <button onClick={handleBackButton} className="btn btn-success w-1/5">Go Back</button>
        </div>
    );
};

export default MealsDetails;