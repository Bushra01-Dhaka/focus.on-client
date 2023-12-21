import { GoPlus } from "react-icons/go";
import Boxes from "../../../Components/DashCompo/Boxes/Boxes";


const MyDashboard = () => {
    return (
        <div className=" min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/T1nsTJX/wave-blue-bg-Copy.png)",
        }}>
           <Boxes></Boxes>
           <div className="px-6 pt-6 border-b-2 flex items-center justify-between">
            <h2 className="text-3xl font-medium">My Tasks</h2>
            <button className="text-center my-6 md:w-[150px] btn bg-[#00D7FF] rounded-full  shadow-lg border-0 hover:bg-transparent hover:border-2 hover:border-[#00D7FF] hover:text-black font-bold">
               <GoPlus className="text-lg font-semibold"></GoPlus> {`Add Task`}
              </button>
           </div>
          
        </div>
    );
};

export default MyDashboard;