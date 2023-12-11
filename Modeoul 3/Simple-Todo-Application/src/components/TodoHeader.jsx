import todoTask from "../assets/image/todoTask.png";
import add from "../assets/image/add.png";
const TodoHeader = () => {
  return (
    <>
      <div className="w-full flex  justify-between items-center  bg-gray-50 rounded-xl gap-2 p-2 text-gray-500">
        <img className="w-8 h-8" src={todoTask} alt="todoTask Image" />
        <form className="w-full">
          <input
            type="text"
            name="text"
            id="text"
            className="w-full px-3 py-2 outline-none bg-transparent text-xl"
            placeholder="Type your todo"
          />
        </form>
        <button>
          <img className="w-8 h-8 mx-auto" src={add} alt="todoTask Image" />
        </button>
      </div>
      <div className="flex justify-between items-center p-2 my-2 text-gray-500">
        <button>Complete All Task</button>
        <button>Clear Completed</button>
      </div>
      <hr />
    </>
  );
};

export default TodoHeader;
