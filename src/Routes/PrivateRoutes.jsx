import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Components/Provider/AuthProvider";



const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    // const location = useLocation();

    
    if(loading) {
        return <div className="flex justify-center items-center h-screen">
             <progress className="progress w-56 bg-[#00D7FF]"></progress>
        </div>
    }

    if(user) 
    {
        return children;
    }
    // return <Navigate to='/login' state = {{from: location}} replace></Navigate>
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;