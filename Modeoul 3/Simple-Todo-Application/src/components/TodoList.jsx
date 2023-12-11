import cross from '../assets/image/cross.png'
const TodoList = () => {
  return (
    <>
    <div className="w-full flex  justify-between items-center gap-4 text-gray-500">
      <div className="flex items-center gap-5">
        <div className="w-5 h-5 rounded-full  ring-2 ring-green-500 cursor-pointer"></div>
        {/* <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-green-500 cursor-pointer"></div> */}
        <h1 className="line-through">Learn React From Learn With Rakib</h1>
      </div>
      <div className="flex gap-4 items-center">
      <div className="w-3 h-3 rounded-full  ring-2 ring-green-500 cursor-pointer bg-green-500"></div>
      <div className="w-3 h-3 rounded-full  ring-2 ring-yellow-500 cursor-pointer"></div>
      <div className="w-3 h-3 rounded-full  ring-2 ring-red-500 cursor-pointer"></div>
      <button><img  className='w-4 h-4' src={cross} alt="" /></button>
      </div>
    </div>
    <hr className='my-3' />
    </>
  )
}

export default TodoList
