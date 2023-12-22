import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import "./Contact.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
AOS.init();
const Contact = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubscribe = () => {
      toast.success("Subscribe Successfully.", {
        position: "top-center",
      });
       navigate("/")
    }
  return (
    <div
      className="hero min-h-screen pt-[50px]"
      style={{
        backgroundImage: "url(https://i.ibb.co/rxNnfKj/wave-blue-bg.png)",
      }}
    >
       <Helmet>
                <title>Focus.on | Contact</title>
            </Helmet>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 py-10">
        {/* left-side */}
        <div data-aos="fade-zoom-in"  data-aos-delay="100" className="flex-1 p-8">
        <h1 className="text-4xl lg:text-5xl">Reach out to us today via any of the given information</h1>
        <div className="py-6 text-lg">
            <p>Call for instant support</p>
            <div className="flex gap-4 py-2"><FaPhoneAlt></FaPhoneAlt><p>+999 888 777</p></div>
        </div>
        <div className="py-6 text-lg">
            <p>Write us via email</p>
            <div className="flex gap-4 py-2"><MdEmail></MdEmail><p>focus.on@gmail.com</p></div>
        </div>
        </div>
        {/* right -side */}
        <div className="flex-1 p-8">
            <div>
                <h2 className="text-3xl">{`Don't want to miss any updates?`} Subscribe Now!</h2>
                {
                  user ?  <input type="email" placeholder={user?.email} className="border-b-2 py-4 outline-0 w-full max-w-xs" />
                  :
                  <input type="email" placeholder="Your email" className="border-b-2 py-4 outline-0 w-full max-w-xs" />
                }
              
                <br />
                <button onClick={handleSubscribe} className="animated-image  text-center my-8 md:w-[150px] btn bg-[#00D7FF] rounded-full  shadow-lg border-0 hover:bg-transparent hover:border-2 hover:border-[#00D7FF] hover:text-black font-bold">{`Subscribe Now`}</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
