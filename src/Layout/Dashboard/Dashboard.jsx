import { FaHome, FaListAlt, FaPhoneAlt, FaPoll, FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { CiBoxList } from "react-icons/ci";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/Provider/AuthProvider";

const Dashboard = () => {
    const {user} = useContext(AuthContext);
    const [title, setTitle] = useState("Web Developer");
  const words = ["Create Task. ", "Work On It. ", "Be Productive. "];

  useEffect(() => {
    const interval = setInterval(() => {
      // Cycle through words
      const nextTitle = words[(words.indexOf(title) + 1) % words.length];
      setTitle(nextTitle);
    }, 2000); // Change every 2000 milliseconds (2 seconds)

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [title]);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* dashboard sidebar */}
      <div className="lg:w-72 min-h-full bg-blue-200">
        <div className="p-4 text-center">
        <p className="font-bold text-3xl ">
            focus.<span className="text-[#00D7FF]">on</span>
          </p>
          <p className="py-6">{title}</p>
        </div>
        <ul className="menu p-4 space-y-6">
          <li>
            <NavLink to="/dashboard/myDashboard"><CiBoxList></CiBoxList> Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/profile"><FaUser></FaUser> Profile</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/allTodo"><FaListAlt></FaListAlt> Todo lists</NavLink>
          </li>

          {/* landing page routes */}
          <hr />
          <li>
            <NavLink to="/"><FaHome></FaHome> Home</NavLink>
          </li>
          <li>
            <NavLink to="/features"><FaPoll></FaPoll> Features</NavLink>
          </li>
          <li>
            <NavLink to="/contact"><FaPhoneAlt></FaPhoneAlt> Contact</NavLink>
          </li>
        </ul>
      </div>

      {/* dashboard content*/}
      <div className="lg:flex-1">
        <h1 className="text-3xl font-semibold p-6 shadow-xl bg-base-200">Welcome Back! {user?.displayName}</h1>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
