import { Link} from "react-router-dom";
// import img from "../assets/icons/nav-logo.png"


const Navbar = () => {
     const navItem = <>
         <li><Link to='/' className="hover:bg-transparent hover:pb-2 hover:border-b-2 hover:border-b-[#00D7FF] mr-2">Home</Link></li>
         <li><Link to='/' className="hover:bg-transparent hover:pb-2 hover:border-b-2 hover:border-b-[#00D7FF] mr-2">About</Link></li>
         <li><Link to='/features' className="hover:bg-transparent hover:pb-2 hover:border-b-2 hover:border-b-[#00D7FF] mr-2">Features</Link></li>
         <li><Link to='/' className="hover:bg-transparent hover:pb-2 hover:border-b-2 hover:border-b-[#00D7FF] mr-2">Testimonial</Link></li>
     </>
    return (
        <div className="navbar bg-base-100 fixed z-20 shadow-xl md:max-w-screen-xl mx-auto px-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navItem}
            </ul>
          </div>
         <div className="flex items-center">
         {/* <img className="w-[70px] h-[70px] rounded-[70px] object-fill" src={img} alt="" /> */}
          <a className="text-xl font-bold text-black">focus.<span className="text-[#00D7FF]">on</span></a>
         </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItem}
          </ul>
        </div>

        {/* <div className="navbar-end">
          
        </div> */}
      </div>
    );
};

export default Navbar;