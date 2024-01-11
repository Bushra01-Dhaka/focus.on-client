import { TiDeleteOutline } from "react-icons/ti";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useTasks from "../../../../Hooks/useTasks";


const CompletedTodoList = ({ items }) => {
  const [, , refetch] = useTasks();
  const { _id, title } = items;
  const axiosPublic = useAxiosPublic();
  console.log("Id",_id);


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
          <TiDeleteOutline
            onClick={() => handleDelete(_id)}
            className="text-2xl"
          ></TiDeleteOutline>

        </div>
      </div>
    </div>
  );
};

export default CompletedTodoList;
