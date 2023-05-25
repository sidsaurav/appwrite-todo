import React, { useEffect, useState } from "react"
import api from "./server/api"
const Todo = () => {
  const [todoList, setTodoList] = useState([])
  const [text, setText] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const addDoc = await api.createDocument({ data: text })
      setText("")
      setTodoList([...todoList, text])
      alert("Field Added Successfully")
    } catch (err) {
      alert("Some Issue Encountered")
      setText("")
      console.log(err.message)
    }
  }

  useEffect(() => {
    const fetch = async () => {
      const res = await api.listDocuments()
      const arr = res.documents.map((ele, i) => {
        return ele.data
      })
      console.log(arr)
      setTodoList(arr)
    }
    fetch()
  }, [])

  return (
    <div className='mx-24 mt-20 borde-4 borde-black flex flex-col justify-center'>
      {/* Heading Starts */}
      <div className='text-center font-title text-6xl borde-4 borde-black'>
        To-Do List
      </div>
      {/* Heading Ends */}

      {/* Input Starts */}
      <div className='my-12 text-center font-body borde-4 borde-black'>
        <input
          type='text'
          placeholder='Enter new task'
          className=' borde borde-black h-10 w-1/2 mx-auto text-center text-2xl'
          value={text}
          onChange={(e) => {
            setText(e.target.value)
          }}
        />
        <button
          onClick={handleSubmit}
          className='block bg-slate-700 hover:bg-slate-800 text-white mx-auto mt-2 w-1/2 h-10'
        >
          Add
        </button>
      </div>
      {/* Input Ends */}

      {/* List Starts */}
      <div className='borde-4 borde-black flex justify-center font-body'>
        <ul className='list-arrow text-xl w-8/12 borde-4 borde-black'>
          {todoList.map((ele) => {
            return <li className='my-2.5'>{ele}</li>
          })}
        </ul>
      </div>
      {/* List Ends */}
    </div>
  )
}

export default Todo
