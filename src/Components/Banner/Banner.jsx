import { Link } from "react-router-dom";
import { GoArrowDownRight } from "react-icons/go";
import "./Banner.css";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Banner = () => {
  const { user } = useContext(AuthContext);
  return (
    <div
      className="bg-fixed pt-[100px] hero min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: "url(https://i.ibb.co/XY089pZ/blue-banner-bg.png)",
      }}
    >
       <Helmet>
                <title>Focus.on | Home</title>
            </Helmet>
      <div className="md:max-w-2xl mx-auto  bg-base-200 bg-opacity-40 p-6 my-auto rounded-md shadow-md">
        <h1 className="text-3xl  md:text-4xl lg:text-5xl text-center font-semibold">
          Elevate Your Productivity with{" "}
          <span className="font-bold border-b-4 border-b-[#00D7FF] ">
            focus.<span className="text-[#00D7FF]">on</span>
          </span>
        </h1>
        <p className="py-6 text-center">
          Streamline your life effortlessly with Focus.on, the ultimate task
          management solution that empowers you to efficiently organize and
          conquer all your tasks with ease.
        </p>
        <div className="text-center">
          {user ? (
            <Link to="/dashboard/myDashboard">
              <button className="animated-image text-center my-6 md:w-[150px] btn bg-[#00D7FF] rounded-full  shadow-lg border-0 hover:bg-transparent hover:border-2 hover:border-[#00D7FF] hover:text-black font-bold">
                {`Let's Explore`}
                <GoArrowDownRight></GoArrowDownRight>
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="animated-image text-center my-6 md:w-[150px] btn bg-[#00D7FF] rounded-full  shadow-lg border-0 hover:bg-transparent hover:border-2 hover:border-[#00D7FF] hover:text-black font-bold">
                {`Let's Explore`}
                <GoArrowDownRight></GoArrowDownRight>
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
