import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../Contexts/AuthContext';


const Login = () => {
  const {signInUser} = useContext(AuthContext)
  const navigate =useNavigate()
  const location = useLocation()
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
        const [showPassword,setShowPassword]=useState(false)
    
        const handleLogin =(e) =>{
          e.preventDefault();
          const email= e.target.email.value
          const password = e.target.password.value
          // console.log(email,password);
          
          signInUser(email, password)
          .then((result) => {

            // console.log(result.user);
            
            navigate(location?.state || '/')

              setSuccess(true);
          })
          .catch((error) => {
            // console.log(error);
            setErrorMessage(error.message);
          });
      };
    return (
        <div className="flex flex-col max-w-md p-6 mx-auto mt-12 rounded-md sm:p-10 bg-gray-50 text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log In</h1>
          <p className="text-sm text-gray-600">LogIn Up to access your account</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-5">
          <div className="space-y-2">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <Link
                  className="text-xs hover:underline text-gray-600"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
              <input
                type={showPassword?"text" : "password"}
                name="password"
                id="password"
                placeholder="*****"
                required
                minLength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />

              <button onClick={() =>setShowPassword(!showPassword)} type="button" className="absolute top-2 right-4 bg-gray-200 p-0.5 px-1"> {showPassword? <FaEyeSlash></FaEyeSlash> :<FaEye></FaEye>} </button>
              </div>
            </div>
          </div>

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          {success && <p className="text-green-400">Login Successfull</p>}

          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full cursor-pointer px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50"
              >
                Log In
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-600">
              Dont have an account?
              <Link to="/auth/register" className="underline text-violet-600">
                Register
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    );
};

export default Login;