import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
           <ul className="flex gap-10 justify-center mt-5">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/posts'>Posts</NavLink>
            <NavLink to='/meals'>Meals</NavLink>
           </ul>
        </div>
    );
};

export default Navbar;