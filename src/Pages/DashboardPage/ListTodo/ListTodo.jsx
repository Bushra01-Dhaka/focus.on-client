import useTasks from "../../../Hooks/useTasks";
import Lists from "./Lists/Lists";


const ListTodo = () => {
    const [tasks] = useTasks();
    console.log(tasks);
    return (
        <div className="p-4 bg-slate-300">
            <h1 className="text-center text-3xl py-4">My <span className=" font-semibold">Todo</span> Lists</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {
                    tasks.map((items, index) => <Lists
                    key={items._id}
                    items={items}
                    index={index + 1}
                    ></Lists> )
                }
            </div>

        </div>
    );
};

export default ListTodo;