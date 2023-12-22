import useTasks from "../../../../Hooks/useTasks";
import TodoList from "./TodoList";

const TasksCreated = () => {

    const [tasks] = useTasks();
    console.log(tasks);

    const todoTasks = tasks.filter(item => item.status === "Todo");
    const completedTasks = tasks.filter(item => item.status === "Completed");

    const ongoingTasks = tasks.filter(item => item.status === "Ongoing");
    // console.log("Ongoing data", ongoingTasks);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-6 px-4">
            <div className="flex-1 bg-blue-300 rounded shadow-xl">
                <h1 className="text-center text-2xl font-medium pt-4">Todo-List</h1>
                {
                    todoTasks.map(items => <TodoList
                    key={items._id}
                    items={items}
                    ></TodoList>)
                }
            </div>

            <div className="flex-1 bg-purple-300 rounded shadow-xl">
                <h1 className="text-center text-2xl pt-4 font-medium">Ongoing</h1>
                {
                    ongoingTasks.map(items => <TodoList
                        key={items._id}
                        items={items}
                        ></TodoList>)
                }
            </div>

            <div className="flex-1 bg-lime-300 rounded shadow-xl">
                <h1 className="text-center text-2xl pt-4 font-medium">Completed</h1>
                {
                    completedTasks.map(items => <TodoList
                        key={items._id}
                        items={items}
                        ></TodoList>)
                }
            </div>
        </div>
    );
};

export default TasksCreated;