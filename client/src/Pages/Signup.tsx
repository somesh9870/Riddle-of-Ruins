import { useState } from "react";
import { useAppDispatch } from "../Redux/store";
import { userSignup } from "../Redux/auth/auth.action";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [age, setAge] = useState(0);
  const dispatch = useAppDispatch();
  function submitHandler() {
    dispatch(userSignup({ email, password, username, age }));
    
  }
  return (
    <div className="background-img h-screen flex mx-auto items-center justify-center">
      <div className="md:mx-32 text-center md:p-12 ">
        <div className=" mx-auto rounded-lg ">
          <h3 className="font-bold text-2xl text-white">Get Started</h3>
          <div className="md:px-12 ">
            <form action="">
              <div className=" p-2 flex gap-5">
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="text"
                  className="bg-transparent rounded p-1 border-b-2 placeholder-white text-extrabold text-white "
                  placeholder="Email"
                />
                <input
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  type="text"
                  className="bg-transparent rounded p-1 border-b-2 placeholder-white text-extrabold text-white "
                  placeholder="Username"
                />
              </div>

              {/* <div className="p-2 text-center ">
              <input onChange={(e)=>{setEmail(e.target.value)}} type="text" className='bg-transparent rounded p-1 border-b-2 placeholder-white text-extrabold text-white ' placeholder='Email' />
            </div> */}

              <div className=" p-2 flex gap-5">
                <input
                  onChange={(e) => {
                    setAge(+e.target.value);
                  }}
                  type="number"
                  className="bg-transparent rounded p-1 border-b-2 placeholder-white text-extrabold text-white "
                  placeholder="Age"
                />
                <input
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                  type="text"
                  className="bg-transparent rounded p-1 border-b-2 placeholder-white text-extrabold text-white "
                  placeholder="Password"
                />
              </div>
            </form>
            <div className="flex justify-between items-center">
              <button
                onClick={submitHandler}
                className="bg-gradient-to-br from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-1 px-4 rounded-md shadow-lg transform hover:scale-105 transition duration-200 ease-in-out"
              >
                Sign up
              </button>
              <p className="text-white ">
                Alreay have a account !{" "}
                <Link to={"/login"} className="underline text-red-600">
                  Login{" "}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
