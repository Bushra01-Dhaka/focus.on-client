
import { TiDeleteOutline } from "react-icons/ti";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useTasks from "../../../../Hooks/useTasks";
import { IoIosCheckmark } from "react-icons/io";
import toast from "react-hot-toast";
// import UpdateTodo from "./UpdateTodo";
import { useContext } from "react";
import { AuthContext } from "../../../../Components/Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { FaRegEdit } from "react-icons/fa";

const TodoList = ({ items }) => {
  const [, , refetch] = useTasks();
  const { _id, title } = items;
  const axiosPublic = useAxiosPublic();
  console.log("Id",_id);


  // start

  const {user} = useContext(AuthContext);

  const [tasks] = useTasks();
  console.log(tasks);

  const selectedTodo = tasks.find(item => item._id === _id);
  console.log("Selected Id data: ", selectedTodo);

  const {description, deadlines, priority, status } = selectedTodo;
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    const updatedTaskInfo = {
      title: data.title || title,
      description: data.description || description,
      deadlines: data.deadlines || deadlines,
      priority: data.priority || priority,
      email: user?.email,
      newStatus: status,
    }
    console.log(updatedTaskInfo);
    axiosPublic.put(`/tasks/${_id}`, updatedTaskInfo).then(async(res) => {
      document.getElementById("my_modal_6").close();
      if (res.data.updated) {
      
        // console.log("Task updated successfully");
        reset();
        // toast
        toast.success("Task updated successfully.", {
          position: "top-center",
        });
        await  refetch();
        
        
        
      }
    });

    // axiosPublic.post("/tasks", taskInfo).then((res) => {
    //   if (res.data.insertedId) {
    //     console.log("new task added")
    //     reset();
    //     //toast
    //     toast.success("Task added Successful.", {
    //       position: "top-center",
    //     });
    //      //refetch all tasks data
    //      refetch();

    //     //navigate
    //     // navigate("/");
    //   }
    // });


    

  }




  //ends





  const handleStatusUpdate = (e) => {
     e.preventDefault();
     const form = e.target;
     const newStatus = form.status.value;
     console.log(newStatus);

     axiosPublic.patch(`/tasks/${_id}`, { status: newStatus })
     .then(res => {
        console.log(res.data)
        if(res.data.modifiedCount > 0)
        {
            refetch(); 
            toast
        toast.success(`Task Status Updated Successfully!.`, {
            position: "top-center",
          });
          

        }
     })

  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Wanna Delete the task?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#5800FF",
      cancelButtonColor: "#00D7FF",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/tasks/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            // refetch tasks data
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Task has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="text-center p-2 ">
      <div className="flex justify-between bg-white p-2 rounded-xl shadow-lg">
        <p className="text-lg">{title}</p>
        <div className="flex items-center gap-1">
          {/* <FaRegEdit className="text-xl"></FaRegEdit> */}
          {/* <UpdateTodo></UpdateTodo> */}

          {/* start */}

          <div className="update">
             {/* ---------- update Tasks ----------- */}
     
        <button
          className="text-center   font-bold"
          onClick={() => document.getElementById("my_modal_6").showModal()}
        >
            <FaRegEdit className="text-xl"></FaRegEdit>
        </button>
        <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            {/* body start */}
            <h3 className="font-bold text-lg">Update Tasks</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Title</span>
              </label>
              <input
                type="text"
                {...register("title")}
                name="title"
                placeholder={title}
                className="input input-bordered border-0 shadow-lg text-black"
               
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
                placeholder={description}
                className="input input-bordered border-0 shadow-lg text-black"
               
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
                placeholder= {deadlines}
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
                placeholder= {priority}
                className="select select-bordered border-0 shadow-lg text-black"
               >
                   <option disabled selected>{priority}</option>
                   <option>High</option>
                   <option>Moderate</option>
                   <option>Low</option>
                </select> 
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Update Task"
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




        {/* ends */}


          <TiDeleteOutline
            onClick={() => handleDelete(_id)}
            className="text-2xl"
          ></TiDeleteOutline>

          {/* <IoIosCheckmark className="text-2xl"></IoIosCheckmark> */}
          {/* modal start */}
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="text-green-500"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            <IoIosCheckmark className="text-2xl"></IoIosCheckmark>
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              {/* body starts */}
              <h2 className="text-2xl text-center">Task Status</h2>
              <form className="card-body" onSubmit={handleStatusUpdate}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Task Status</span>
                  </label>
                  <select 
                  type="text"
                  name="status"
                  className="select select-info w-full max-w-xs">
                    <option>Ongoing</option>
                    <option>Completed</option>
                  </select>
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Update Status"
                    className="text-center my-6 md:w-[150px] btn bg-[#00D7FF] rounded-full  shadow-lg border-0 hover:bg-transparent hover:border-2 hover:border-[#00D7FF] hover:text-black font-bold"
                    required
                  />
                </div>
              </form>

              {/* body ends */}
            </div>
          </dialog>
          {/* modal ends */}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
