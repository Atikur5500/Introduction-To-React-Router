import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const Meals = () => {
    const meals = useLoaderData()
    return (
        <div>
            <h2 className="text-2xl">Meals:{meals.length}</h2>
            <div className="grid grid-cols-3 gap-5 p-5">
               {
                meals.map(meal => <Meal key={meal.id} meal={meal}></Meal>)
               }
            </div>
        </div>
    );
};

export default Meals;