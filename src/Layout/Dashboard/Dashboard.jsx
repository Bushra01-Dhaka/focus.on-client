import { FaListAlt, FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { CiBoxList } from "react-icons/ci";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* dashboard sidebar */}
      <div className="w-72 min-h-full bg-blue-200">
        <div className="p-4 text-center">
        <p className="font-bold text-3xl ">
            focus.<span className="text-[#00D7FF]">on</span>
          </p>
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
        </ul>
      </div>

      {/* dashboard content*/}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
