import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Root = () => {
    return (
        <div className="font-Inter">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;