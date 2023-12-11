const TodoFooter = () => {
  return (
    <div className="flex justify-between items-center gap-5 p-2 text-gray-500 flex-wrap">
      <h3>2 Task Left</h3>
      <div className="flex gap-3 items-center">
        <ul className="flex gap-1 items-center">
          <li className="cursor-pointer font-semibold">All</li>
          <li>|</li>
          <li className="cursor-pointer">Incomplete</li>
          <li>|</li>
          <li className="cursor-pointer">Complete</li>
        </ul>
        <div className="flex gap-4">
          <div className="w-3 h-3 rounded-full  ring-2 ring-green-500 cursor-pointer bg-green-500"></div>
          <div className="w-3 h-3 rounded-full  ring-2 ring-yellow-500 cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full  ring-2 ring-red-500 cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
};

export default TodoFooter;
