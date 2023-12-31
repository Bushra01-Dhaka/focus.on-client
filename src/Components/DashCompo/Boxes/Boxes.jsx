import useTasks from "../../../Hooks/useTasks";
import "./Boxes.css"
const Boxes = () => {
  const [tasks] = useTasks();
  const completedTasks = tasks.filter(item => item.status === "Completed");

  const ongoingTasks = tasks.filter(item => item.status === "Ongoing");
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 px-6 mt-10">
              <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title"> <span className="animated-image bg-[#00D7FF] rounded-md text-black p-6">{tasks?.length}</span></h2>
            <div className="py-4">
            <p className=" text-black text-xl font-semibold">Total Tasks</p>
            </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title"> <span className="animated-image bg-[#00D7FF] rounded-md text-black p-6">{ongoingTasks?.length}</span></h2>
            <div className="py-4">
            <p className=" text-black text-xl font-semibold">Ongoing Tasks</p>
            </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title"> <span className="animated-image bg-[#00D7FF] rounded-md text-black p-6">{completedTasks?.length}</span></h2>
            <div className="py-4">
            <p className=" text-black text-xl font-semibold">Completed Tasks</p>
            </div>
            </div>
          </div>

        </div>
    );
};

export default Boxes;