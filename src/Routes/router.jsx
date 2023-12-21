import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Features from "../Components/Features/Features";
import Contact from "../Components/Contact/COntact";
import ErrorPage from "../Pages/Error/ErrorPage";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";

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

  ]);

export default router;