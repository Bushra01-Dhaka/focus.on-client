import { useContext } from "react";
import { AuthContext } from "../../../Components/Provider/AuthProvider";
import "./Profile.css"
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div
      className=" pt-[100px] hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/9V1TrK5/blue-banner-bg-Copy.png)",
      }}
    >
        
        <Helmet>
            <title>Focus.on | Dashboard | Profile</title>
        </Helmet>
      <div className="card w-96 bg-transparent shadow-xl p-8 border-l-2 border-l-[#00D7FF] border-r-2 border-r-[#00D7FF]">
        <figure className="relative bottom-[100px]">
          <img
          className="animated-image border-2 border-[#00D7FF] p-2 shadow-xl h-[200px] w-[200px] rounded-[200px] object-cover"
            src={user?.photoURL}
            alt="Shoes"
          />
        </figure>
        <div className="p-2 text-lg font-semibold text-center">
          <p className=" ">Name: {user?.displayName}</p>
          <p className="">Email: {user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
