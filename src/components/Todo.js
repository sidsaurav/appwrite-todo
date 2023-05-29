import React, { useEffect, useState } from 'react'
import api from '../server/api'
import Spinner from './Spinner'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useAuth } from '../hooks/useAuth'
import { Query } from 'appwrite'

const Todo = () => {
  const { user } = useAuth()
  const [todoList, setTodoList] = useState([])
  const [loading, setLoading] = useState(false)
  const [text, setText] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const addDoc = await api.createDocument({
        data: text,
        createdBy: user ? user.email : 'guest',
      })
      setLoading(false)
      setText('')
      setTodoList([
        ...todoList,
        {
          data: text,
          id: addDoc.$id,
          createdBy: user ? user.email : 'guest',
        },
      ])
      toast.success('Item added')
    } catch (err) {
      setLoading(false)
      setText('')
      toast.error(err.message)
      console.log(err.message)
    }
  }

  const handleDelete = async (id) => {
    try {
      setLoading(true)
      await api.deleteDocument(id)
      const nArr = todoList.filter((ele) => ele.id !== id)
      setLoading(false)
      setTodoList([...nArr])
      toast.success('Item removed')
      //   alert("Item removed")
    } catch (err) {
      setLoading(false)
      toast.error(err.message)
      console.log(err.message)
    }
  }

  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      console.log('user?.email', user?.email)
      const res = await api
        .provider()
        .database.listDocuments(
          process.env.REACT_APP_DATABASE_ID,
          process.env.REACT_APP_COLLECTION_ID,
          [Query.equal('createdBy', [user?.email, 'guest'])]
        )
      const arr = res.documents.map((ele, i) => {
        return { data: ele.data, id: ele.$id, createdBy: ele.createdBy }
      })
      setLoading(false)
      setTodoList(arr)
    }
    fetch()
  }, [user])

  return (
    <div className='mx-24 mt-20 borde-4 borde-black flex flex-col justify-start'>
      {/* Heading Starts */}
      <div className='text-center font-title text-6xl borde-4 borde-black mb-6'>
        To-Do List
      </div>
      {/* Heading Ends */}

      {/* credits starts */}
      <div className='flex justify-center items-start'>
        <a
          href='https://twitter.com/siddsaurav'
          target='_blank'
          className='flex'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='pointer-events-none h-7 w-7'
            fill='currentColor'
            viewBox='0 0 24 24'
          >
            <title>Share via Twitter</title>
            <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'></path>
          </svg>

          <span className='text-xl'> /siddsaurav</span>
        </a>
      </div>
      {/* credits ends */}

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
      {loading ? (
        <div className='flex justify-center'>
          <Spinner />
        </div>
      ) : (
        <div className='borde-4 borde-black flex justify-center font-body'>
          <ul className='list-arrow text-xl w-8/12 borde-4 borde-black'>
            {todoList.map((ele) => {
              return (
                <li
                  onClick={() => handleDelete(ele.id)}
                  className='my-2.5 w-fit hover:text-red-600 hover:line-through hover:cursor-pointer'
                  key={ele.id}
                >
                  {console.log(ele)}
                  {ele.data + ' '}
                  <span
                    className={`font-sans text-sm ml-2 text-white ${
                      ele.createdBy === 'guest'
                        ? 'bg-neutral-600'
                        : 'bg-red-500'
                    } pl-0.5 pr-1 pb-0.5`}
                  >
                    {ele.createdBy === 'guest'
                      ? 'guest'
                      : '@' + ele.createdBy.split('@')[0]}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      )}
      {/* List Ends */}
      <ToastContainer position='bottom-center' autoClose='2000' />
    </div>
  )
}

export default Todo
