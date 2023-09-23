import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

import Footer from "../Footer/Footer";
const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            {/* <h1 className="text-2xl">This is react router home page</h1> */}
          <Navbar></Navbar>
         
          {
                navigation.state === 'loading' ? <span className="loading loading-spinner text-error"></span> : <Outlet></Outlet>
          }
         
            <Footer></Footer>
        </div>
    );
};

export default Home;