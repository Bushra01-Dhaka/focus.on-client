import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const [title, setTitle] = useState("Web Developer");
  const words = ["Productive. ", "Punctual. ", "Effective. "];

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
    <div
      className="hero min-h-[300px] object-fill"
      style={{
        backgroundImage: "url(https://i.ibb.co/9V1TrK5/blue-banner-bg-Copy.png)",
      }}
    >
      <div className="flex justify-center items-center">
        <div className="text-center p-6">
          <Link to="/"><h1 className="text-3xl font-semibold">
            focus. <span className="text-[#00D7FF]">on</span>
          </h1></Link>
          <p className="py-6 text-3xl">
            Now {`it's time to be`}{" "}
            <span className="font-bold text-[#00D7FF]">{title}</span>
          </p>

          <div className="md:max-w-lg mx-auto text-center">
            <div className="flex justify-center text-3xl gap-4 text-center mx-auto">
              <Link>
                <FaTwitter className="hover:text-[#00D7FF]"></FaTwitter>
              </Link>
              <Link>
                <FaFacebook className="hover:text-[#00D7FF]"></FaFacebook>
              </Link>
              <Link>
                <FaLinkedin className="hover:text-[#00D7FF]"></FaLinkedin>
              </Link>
              <Link>
                <MdEmail className="hover:text-[#00D7FF]"></MdEmail>
              </Link>
            </div>
           
          </div>
          <small className="text-center relative bottom-[-100px]">Copyright © 2023 - All right reserved by focus.on</small>
        </div>
      </div>
     
    </div>
  );
};

export default Footer;
