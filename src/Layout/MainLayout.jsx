import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold">Focus.on</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;