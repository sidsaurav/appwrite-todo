import React, { useState } from "react"
import api from "../server/api"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Signup = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cpassword, setCpassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    try {
      if (password !== cpassword) {
        toast.error("Passwords do not match")
        return
      }
      setLoading(true)
      const res = await api.createAccount(email, password)
      setLoading(false)
      navigate("/")
      toast.success("Welcome to the tribe!")
    } catch (err) {
      setLoading(false)
      toast.error(err.message)
      console.log(err.message)
    }
  }

  return (
    <div className='mx-24 mt-20 borde-4 borde-black flex flex-col justify-start'>
      {/* Heading Starts */}
      <div className='text-center font-title text-6xl borde-4 borde-black mb-6'>
        Signup
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

      {/* Email Starts */}
      <div className='mt-16 text-center borde-4 borde-black'>
        <input
          type='text'
          placeholder='email?'
          className='borde borde-black h-10 w-1/2 mx-auto text-center text-2xl'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
      </div>
      {/* Email Ends */}

      {/* Password Starts */}
      <div className='mt-10 text-center borde-4 borde-black'>
        <input
          type='password'
          placeholder='secret pin please!'
          className=' borde borde-black h-10 w-1/2 mx-auto text-center text-2xl'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
      </div>
      {/* Password Ends */}

      {/* Confirm Password Starts */}
      <div className='mt-6 text-center borde-4 borde-black'>
        <input
          type='password'
          placeholder='sure bout ur pin?'
          className=' borde borde-black h-10 w-1/2 mx-auto text-center text-2xl'
          value={cpassword}
          onChange={(e) => {
            setCpassword(e.target.value)
          }}
        />
      </div>
      {/* Confirm Password Ends */}

      {/* Signup Button Starts */}
      <div className='mt-12 flex justify-center'>
        <button className='border-4 border-black' onClick={handleSubmit}>
          <img
            src='https://res.cloudinary.com/dhv3pf4ak/image/upload/v1685211912/yay-welcome_aeboku.jpg'
            alt='Signup'
            className='h-32'
          />
        </button>
      </div>
      {/* Signup Button Ends */}
      <ToastContainer position='bottom-center' autoClose='2000' />
    </div>
  )
}

export default Signup
