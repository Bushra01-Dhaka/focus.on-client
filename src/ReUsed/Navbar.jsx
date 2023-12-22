import { Link } from "react-router-dom";
import { AuthContext } from "../Components/Provider/AuthProvider";
import { useContext } from "react";
// import img from "../assets/icons/nav-logo.png"

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // const [isAdmin] = useAdmin();

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const navItem = (
    <>
      <li>
        <Link
          to="/"
          className="hover:bg-transparent hover:pb-2 hover:border-b-2 hover:border-b-[#00D7FF] mr-1"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/features"
          className="hover:bg-transparent hover:pb-2 hover:border-b-2 hover:border-b-[#00D7FF] mr-1"
        >
          Features
        </Link>
      </li>
      {/* testimonial */}

      {/* <li>
        <Link
          to="/testimonial"
          className="hover:bg-transparent hover:pb-2 hover:border-b-2 hover:border-b-[#00D7FF] mr-1"
        >
          Testimonial
        </Link>
      </li> */}

      <li>
        <Link
          to="/contact"
          className="hover:bg-transparent hover:pb-2 hover:border-b-2 hover:border-b-[#00D7FF] mr-1"
        >
          Contact
        </Link>
      </li>
      {
        user ?
        <li>
          <Link
          to="/"
          onClick={handleLogOut}
          className="hover:bg-transparent hover:pb-2 hover:border-b-2 hover:border-b-[#00D7FF] mr-1"
        >
          Log out
        </Link>
        </li>
        :
        <li>
        <Link
          to="/login"
          className="hover:bg-transparent hover:pb-2 hover:border-b-2 hover:border-b-[#00D7FF] mr-1"
        >
          Login
        </Link>
      </li>
       
      }
      {
        user && <li><Link to="/dashboard/myDashboard" className="hover:bg-transparent hover:pb-2 hover:border-b-2 hover:border-b-[#00D7FF] mr-1">Dashboard</Link></li>
      }
      

      {user && (
        <div className="flex justify-center items-center gap-1 p-1 bg-white text-white rounded-3xl shadow-lg mr-2 border-2 border-[#00D7FF]">
          <small className="font-bold text-black">{user?.displayName}</small>
          <div className="avatar online">
            <div className="w-6 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </div>
        </div>
      )}

    </>
  );
  return (
    <div className="navbar bg-base-100 fixed z-20 shadow-xl text-black md:max-w-screen-xl mx-auto px-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64"
          >
            {navItem}
          </ul>
        </div>
        <div className="flex items-center">
          {/* <img className="w-[70px] h-[70px] rounded-[70px] object-fill" src={img} alt="" /> */}
          <a className="text-xl font-bold text-black">
            focus.<span className="text-[#00D7FF]">on</span>
          </a>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>

      {/* <div className="navbar-end">
          
        </div> */}
    </div>
  );
};

export default Navbar;
