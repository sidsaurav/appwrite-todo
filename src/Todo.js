import React from "react"
const Todo = () => {
  return (
    <div className='mx-24 mt-20 border-4 border-black'>
      <div className='text-center font-title text-6xl border-4 border-black'>
        To-Do List
      </div>
      <div className='my-12 text-center font-body border-4 border-black'>
        <input
          type='text'
          placeholder='Enter new task'
          className=' border border-black h-10 w-1/2 mx-auto text-center text-2xl'
        />
        <button className='block bg-slate-700 hover:bg-slate-800 text-white mx-auto mt-2 w-1/2 h-10 '>
          Add
        </button>
      </div>
      <div className='border-4 border-black h-14 font-body flex justify-center'>
        <ul className='list-arrow'>
          <li>abc</li>
          <li>123</li>
        </ul>
      </div>
    </div>
  )
}

export default Todo
