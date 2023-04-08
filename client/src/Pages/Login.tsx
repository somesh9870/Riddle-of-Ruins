import {useState}  from 'react'
import { useAppDispatch } from '../Redux/store'
import "./Login.css"
import { userLogin } from '../Redux/auth/auth.action'


const Login = () => {
  const [username,setUserName]=useState("")
  const [password,setPass]=useState("")
  const dispatch=useAppDispatch()
  function submitHandler(){
    dispatch(userLogin({username,password}))
  }
  return (
    <div className="background-img h-full flex mx-auto items-center justify-center">
      <div className="md:mx-32 text-center md:p-12 ">
      <div className=" mx-auto rounded-lg ">
        <h3 className='font-bold text-2xl '></h3>
        <div className="md:px-12 ">
          <form action="">
            <div className=" p-2">
              <input onChange={(e)=>{setUserName(e.target.value)}} value={username} type="text" className='bg-transparent rounded p-1 border-b-2 placeholder-white text-extrabold text-white ' placeholder='Username' />
            </div>
            <div className=" p-2">
              <input onChange={(e)=>{setPass(e.target.value)}} value={password} type="text" className='bg-transparent rounded p-1 border-b-2 placeholder-white text-extrabold text-white ' placeholder='Password' />
            </div>
          </form>
          <div className="">
            <button onClick={submitHandler} className='bg-gray-300 px-4 py-1 rounded font-bold hover:bg-red-400 hover:text-white transition-all hover:shadow-lg hover:shadow-red-100'>Login</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login