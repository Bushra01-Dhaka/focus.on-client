import useTasks from "../../../../Hooks/useTasks";
import TodoList from "./TodoList";

const TasksCreated = () => {

    const [tasks] = useTasks();
    console.log(tasks);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-6 px-4">
            <div className="flex-1 bg-blue-300 rounded shadow-xl">
                <h1 className="text-center text-2xl font-medium pt-4">Todo-List</h1>
                {
                    tasks.map(items => <TodoList
                    key={items._id}
                    items={items}
                    ></TodoList>)
                }
            </div>

            <div className="flex-1 bg-purple-300 rounded shadow-xl">
                <h1 className="text-center text-2xl pt-4 font-medium">Ongoing</h1>
            </div>

            <div className="flex-1 bg-lime-300 rounded shadow-xl">
                <h1 className="text-center text-2xl pt-4 font-medium">Completed</h1>
            </div>
        </div>
    );
};

export default TasksCreated;