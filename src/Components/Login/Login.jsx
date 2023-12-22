import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/focus-ly-images/login.png"
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import { RiGithubFill, RiGoogleFill } from "react-icons/ri";
import "./Login.css"


const Login = () => {
    
    const { signIn, googleSignIn, githubSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    // const location = useLocation();
    // const axiosPublic = useAxiosPublic();
  
    // const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    
        signIn(email, password)
          .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
            //navigate
            // navigate(from, { replace: true });
            navigate("/dashboard/myDashboard")
            //toast
            toast.success("Log in Successful.", {
              position: "top-right",
            });
          })
          .catch((error) => {
            console.error(error);
            toast.error("Please provide valid email & password.", {
              position: "top-right",
            });
          });
      };

      const handleGoogleLogin = () => {
        googleSignIn()
    
             //toast 
          toast.success("Log in Successful.", {
            position: "top-right",
          });
          //navigate
          navigate("/");

      }

      const handleGithubSignIn = () => {
        githubSignIn()
        .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
    
              //toast
              toast.success("Log in Successful.", {
                position: "top-right",
              });
              //navigate
              navigate("/");
        })
        .catch((error) => console.error(error));
      } 

    return (
        <div  className="md:max-w-screen-xl mx-auto  rounded shadow-xl p-10">
        <Helmet>
          <title>FitHub | Login</title>
        </Helmet>

           <div className="flex flex-col-reverse md:flex-row justify-center items-center p-[50px]">
      <div className="md:flex-1">
        <img 
        className="animated-image border-r-2 border-r-black"
        src={img} alt="login image" />
      </div>

      <div className="md:flex-1 ">
        <form onSubmit={handleLogin} className="card-body">
          <h1 className="animated-image text-4xl text-center  font-extrabold">
            Log<span className="text-[#00D7FF]">in</span>
          </h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered border-0 shadow-lg text-black"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered border-0 shadow-lg text-black"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>


          <div className="form-control mt-6">
            <input
              type="submit"
              value="Login"
              className="btn bg-slate-700 shadow-lg   border-0 hover:bg-slate-900 text-[#00D7FF]"
            />
          </div>
        </form>
        <div className="text-center">
          <p className="">
            New here? <Link to="/signUp">Create a <span className="font-semibold underline">New Account</span></Link>
          </p>
          <p className="text-black my-2">Or sign in with</p>
          <div className="flex flex-col md:flex-row my-6 justify-center items-center text-black text-3xl gap-4">
            <button onClick={handleGoogleLogin} className="btn  shadow-lg bg-slate-700 border-0 hover:bg-slate-900 text-[#00D7FF]"><RiGoogleFill className="text-[#00D7FF] text-3xl"></RiGoogleFill></button>
            <button
            onClick={handleGithubSignIn}
                className="btn  shadow-lg bg-slate-700 border-0 hover:bg-slate-900 text-[#00D7FF]"
              >
                <RiGithubFill className=" text-3xl hover:text-[#00D7FF]"></RiGithubFill>
              </button>
          </div>
        </div>
      </div>
    </div> 
    </div>
    );
};

export default Login;