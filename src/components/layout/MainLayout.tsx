import { Outlet } from "react-router-dom";
import Footer from "../../shared/Footer";
import NavBar from "../../shared/NavBar";

const MainLayout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;