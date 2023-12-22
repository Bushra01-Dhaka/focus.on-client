import { GoPlus } from "react-icons/go";
import Boxes from "../../../Components/DashCompo/Boxes/Boxes";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../Components/Provider/AuthProvider";
import toast from "react-hot-toast";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const MyDashboard = () => {
  const {user} = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    const taskInfo = {
      title: data.title,
      description: data.description,
      deadlines: data.deadlines,
      priority: data.priority,
      email: user?.email
    }
    console.log(taskInfo);
    axiosPublic.post("/tasks", taskInfo).then((res) => {
      if (res.data.insertedId) {
        console.log("new task added")
        reset();
        //toast
        toast.success("Task added Successful.", {
          position: "top-center",
        });
        //navigate
        // navigate("/");
      }
    });

  }

  return (
    <div
      className=" min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/T1nsTJX/wave-blue-bg-Copy.png)",
      }}
    >
      <Boxes></Boxes>
      <div className="px-6 pt-6 border-b-2 flex items-center justify-between">
        <h2 className="text-3xl font-medium">My Tasks</h2>
        {/* button */}
        {/* <button className="text-center my-6 md:w-[150px] btn bg-[#00D7FF] rounded-full  shadow-lg border-0 hover:bg-transparent hover:border-2 hover:border-[#00D7FF] hover:text-black font-bold">
          <GoPlus className="text-lg font-semibold"></GoPlus> {`Add Task`}
        </button> */}

        {/* modal starts*/}
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="text-center my-6 md:w-[150px] btn bg-[#00D7FF] rounded-full  shadow-lg border-0 hover:bg-transparent hover:border-2 hover:border-[#00D7FF] hover:text-black font-bold"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
           <GoPlus className="text-lg font-semibold"></GoPlus> {`Add Task`}
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            {/* body start */}
            <h3 className="font-bold text-lg">Add Tasks</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Title</span>
              </label>
              <input
                type="text"
                {...register("title")}
                name="title"
                placeholder="Add task title"
                className="input input-bordered border-0 shadow-lg text-black"
                required
              />
               {errors.title && <span>Task title is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Description</span>
              </label>
              <input
                type="text"
                {...register("description")}
                name="description"
                placeholder="Add task description"
                className="input input-bordered border-0 shadow-lg text-black"
                required
              />
               {errors.description && <span>Task description is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Deadlines</span>
              </label>
              <input
                type="datetime-local"
                {...register("deadlines")}
                name="deadlines"
                placeholder="Add task deadlines"
                className="input input-bordered border-0 shadow-lg text-black"
                required
              />
               {errors.deadlines && <span>Task deadlines is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Priority</span>
              </label>
              <select
                type="text"
                {...register("priority")}
                name="priority"
                placeholder="Add task priority"
                className="select select-bordered border-0 shadow-lg text-black"
                required>
                   <option>High</option>
                   <option>Moderate</option>
                   <option>Low</option>
                </select> 
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Add Task"
                className="text-center my-6 md:w-[150px] btn bg-[#00D7FF] rounded-full  shadow-lg border-0 hover:bg-transparent hover:border-2 hover:border-[#00D7FF] hover:text-black font-bold"
              />
            </div>
            </form>
             {/* body ends */}
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>


        {/* modal ends */}
      </div>
    </div>
  );
};

export default MyDashboard;
