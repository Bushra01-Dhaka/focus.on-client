import { Outlet } from "react-router-dom";
import Navbar from "../ReUsed/Navbar";
import { ScrollRestoration } from "react-router-dom";
import Footer from "../ReUsed/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

            <ScrollRestoration />
        </div>
    );
};

export default MainLayout;