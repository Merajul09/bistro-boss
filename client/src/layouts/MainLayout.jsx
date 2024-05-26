import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/shared/Footer";
import NavBar from "../components/shared/NavBar";

const MainLayout = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');
    return (
        <>
            {noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </>
    );
};

export default MainLayout;