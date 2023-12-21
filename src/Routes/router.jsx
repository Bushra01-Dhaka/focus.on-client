import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Features from "../Components/Features/Features";
import Contact from "../Components/Contact/COntact";
import ErrorPage from "../Pages/Error/ErrorPage";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard/Dashboard";
import MyDashboard from "../Pages/DashboardPage/MyDash/MyDashboard";
import Profile from "../Pages/DashboardPage/Profile/Profile";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path:"/features",
            element:<Features></Features>
        },
        {
            path:"/contact",
            element:<Contact></Contact>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/signUp",
          element:<SignUp></SignUp>
        }
      ]
    },
    {
      path:"dashboard",
      element:<Dashboard></Dashboard>,
      children: [
        {
          path: "myDashboard",
          element: <MyDashboard></MyDashboard>
        },
        {
          path: "profile",
          element: <Profile></Profile>
        }
      ]
    }

  ]);

export default router;