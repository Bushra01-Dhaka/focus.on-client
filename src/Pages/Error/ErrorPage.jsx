import { Link } from "react-router-dom";
import img from "../../assets/focus-ly-images/page-not-found.png"
import { GoArrowDownRight } from "react-icons/go";
const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center text-center">
            <div>
                <img 
                className="h-[500px]"
                src={img} alt="" />
                <Link to="/"><button className="animated-image text-center my-6 md:w-[150px] btn bg-[#00D7FF] rounded-full  shadow-lg border-0 hover:bg-transparent hover:border-2 hover:border-[#00D7FF] hover:text-black font-bold">{`Goto Home`}
               <GoArrowDownRight></GoArrowDownRight></button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;