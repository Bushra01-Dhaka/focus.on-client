
const TasksCreated = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-6">
            <div className="flex-1">
                <h1 className="text-center text-2xl font-medium">Todo-List</h1>
            </div>

            <div className="flex-1">
                <h1 className="text-center text-2xl font-medium">Ongoing</h1>
            </div>

            <div className="flex-1">
                <h1 className="text-center text-2xl font-medium">Completed</h1>
            </div>
        </div>
    );
};

export default TasksCreated;