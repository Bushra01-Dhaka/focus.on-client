import { FaPlusCircle } from "react-icons/fa";


const TodoList = ({items}) => {
    const {title} = items;
    return (
        <div className="text-center p-2 ">
            <div className="flex justify-between bg-white p-2 rounded-xl shadow-lg">
                <p className="text-lg">{title}</p>
                <FaPlusCircle className="text-2xl"></FaPlusCircle>
            </div>
        </div>
    );
};

export default TodoList;