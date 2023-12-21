import { Helmet } from "react-helmet-async";
import img from "../../assets/focus-ly-images/signup.png"
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { RiGithubFill, RiGoogleFill } from "react-icons/ri";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import "./SignUp.css"


const SignUp = () => {
    const navigate = useNavigate();
//   const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile, googleSignIn,  githubSignIn } =
    useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log("User profile data updated.");

          toast
          toast.success("Log in Successful.", {
            position: "top-right",
          });
          
          navigate("/");

            //create user entry ion database
            // const userInfo = {
            //   name: data.name,
            //   email: data.email,
            // };
            // axiosPublic.post("/users", userInfo).then((res) => {
            //   if (res.data.insertedId) {
            //     console.log("new user added")
            //     reset();
            //     //toast
            //     toast.success("Log in Successful.", {
            //       position: "top-right",
            //     });
            //     //navigate
            //     navigate("/");
            //   }
            // });
        })
        .catch((error) => console.log(error));
    });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

    //       const userInfo = {
    //         name: result.user?.displayName,
    //         email: result.user?.email
    //       }
    //       axiosPublic.post('/users', userInfo)
    //       .then(res => {
    //         console.log(res.data);

    //         //toast
    //     toast.success("Log in Successful.", {
    //       position: "top-right",
    //     });
    //     //navigate
    //     navigate("/");


    //    })
       
       //...
         //toast
         toast.success("Log in Successful.", {
            position: "top-right",
          });
          //navigate
          navigate("/");

        
      })
      .catch((error) => console.error(error));
  };

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
        <div
      className=" md:max-w-screen-xl mx-auto  rounded shadow-xl p-10 "
    >
      <Helmet>
        <title>Focus.on | SignUp</title>
      </Helmet>

      <div className="flex flex-col md:flex-row-reverse justify-center items-center p-[50px]">
        <div className="md:flex-1">
          <img
            data-aos="fade-zoom-in"  data-aos-delay="100" 
            className=""
            src={img}
            alt="login image"
          />
        </div>

        <div className="md:flex-1 ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h1 className="animated-image text-4xl text-center font-extrabold">
              Sign<span className="text-[#00D7FF]">up</span>
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Name</span>
              </label>
              <input
                type="text"
                {...register("name")}
                name="name"
                placeholder="user name"
                className="input input-bordered border-0 shadow-lg text-black"
                required
              />
              {errors.name && <span>User name is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Photo URL</span>
              </label>
              <input
                type="text"
                {...register("photoURL")}
                placeholder="photo url"
                className="input input-bordered border-0 shadow-lg text-black"
                required
              />
              {errors.photoURL && <span>Photo URL is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="email"
                className="input input-bordered border-0 shadow-lg text-black"
                required
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500">Email is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                name="password"
                placeholder="password"
                className="input input-bordered border-0 shadow-lg text-rose-500"
                required
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500">Password is required.</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">Password must have 6 characters.</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-500">
                  Password must mot more than 20 characters.
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500">
                  Password must have 1 uppercase, 1 lowercase and 1 special
                  character.
                </p>
              )}
            </div>

            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sign Up"
                className="btn btn-primary shadow-lg bg-slate-700 border-0 hover:bg-slate-900 text-[#00D7FF]"
              />
            </div>
          </form>
          <div className="text-center">
            <p className="">
              Already registered? <Link to="/login"> <span className="font-semibold underline">Login</span> now</Link>
            </p>
            <p className="text-black my-2">Or sign up with</p>
            <div className="flex my-6 justify-center items-center text-black text-3xl gap-4">
              {/* <CiFacebook></CiFacebook>
                <RiGoogleFill></RiGoogleFill>
                <RiGithubFill></RiGithubFill> */}

              <button
                onClick={handleGoogleLogin}
                className="btn  shadow-lg bg-slate-700 border-0 hover:bg-slate-900 text-[#00D7FF]"
              >
                <RiGoogleFill className=" text-3xl hover:text-[#00D7FF]"></RiGoogleFill>
              </button>
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

export default SignUp;