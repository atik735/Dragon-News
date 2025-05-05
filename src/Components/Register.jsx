import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../Contexts/AuthContext';

const Register = () => {
    const {createUser,updateUser} = useContext(AuthContext)
    const navigate= useNavigate()
    const [showPassword,setShowPassword]=useState(false)
    const [errorMessage,setErrorMessage] = useState("")

    const handleSignUp =(e) =>{
      e.preventDefault();
      const name = e.target.name.value
      const email= e.target.email.value
      const password = e.target.password.value
      const photo = e.target.photo.value
      // console.log(email,password,photo);

      createUser(email,password).then(result =>{

        const profile = {
          displayName: name,
          photoURL:photo,
        }
        updateUser(profile).then(() =>{
  // Profile updated!
  // ...

        })
        .catch(error => {
            // An error occurred
  // ...
        })
        console.log(result);
        navigate("/")
      })
      .catch(error => {
        console.log(error);
        setErrorMessage(error.message)
      })
    }

    return (
      <div className='py-16'>
        <div className="flex flex-col max-w-md p-6 mx-auto rounded-md sm:p-10 bg-base-100 text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-600">Sign Up to access your account</p>
        </div>
        <form onSubmit={handleSignUp} className="space-y-5">
          <div className="space-y-2">
            <div className="space-y-4">
              <label className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Name"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />

              <label className="block mb-2 text-sm">
                Photo Url
              </label>
              <input
                type="text"
                name="photo"
                id="photo"
                required
                placeholder="Photo Url"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />

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
          <label className="label">
      <input type="checkbox" name="terms" className="checkbox" />
      Accept our terms and condition
    </label>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full cursor-pointer px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50"
              >
                Sign Up
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-600">
              Already have an account?
              <Link to="/auth/login" className="underline text-violet-600">
                LogIn
              </Link>
              .
            </p>
          </div>
        </form>
        {
          errorMessage && <p className='text-red-500'>{errorMessage}</p>
        }
      </div>
      </div>
      
    );
};

export default Register;

