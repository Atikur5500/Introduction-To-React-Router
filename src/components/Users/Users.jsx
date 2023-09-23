import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2>User Data: {users.length}</h2>
            <div className="flex gap-5 flex-wrap px-10">
                {
                    users.map(users => <User key={users.name} users={users}></User>)
                }
            </div>
        </div>
    );
};

export default Users;