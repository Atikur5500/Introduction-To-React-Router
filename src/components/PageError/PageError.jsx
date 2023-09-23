import { Link, useRouteError } from "react-router-dom";

const PageError = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className="text-center space-y-3">
            <h2 className="text-2xl flex justify-center items-center mt-[20%]">Oops!</h2>
            {/* <p className="text-xl">Page not found!</p> */}
            <p>{error.data || error.message}</p>
            {
                error.status === 404 && <div>
                    {/* <h3 className="text-xl">Page Not Found</h3>
                    <h3 className="text-xl">Try Again</h3> */}
                    <Link to='/'><button className="btn btn-primary">Go Back</button></Link>
                </div>
            }
        </div>
    );
};

export default PageError;