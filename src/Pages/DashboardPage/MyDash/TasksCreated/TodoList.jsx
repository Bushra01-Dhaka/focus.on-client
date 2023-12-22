import { FaRegEdit } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useTasks from "../../../../Hooks/useTasks";
import { IoIosCheckmark } from "react-icons/io";
import toast from "react-hot-toast";

const TodoList = ({ items }) => {
  const [, , refetch] = useTasks();
  const { _id, title } = items;
  const axiosPublic = useAxiosPublic();
  console.log("Id",_id);

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
          <FaRegEdit className="text-xl"></FaRegEdit>
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
