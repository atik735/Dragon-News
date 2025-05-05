import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import userimg from '../assets/user.png'

const Navbar = () => {
    const {user,signOutUser} = useContext(AuthContext)

    const handleSignOut =() =>{
      signOutUser()
      .then(() =>{
        console.log("signout succesfull");
        
      })
      .catch(error =>{
        console.log(error);
      })
    }


    const links = <div className='flex gap-5 items-center text-[#706F6F]'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to={"/about"}>About</NavLink>
                    <NavLink to={"/career"}>Career</NavLink>
    </div>

    return (
        <div className="navbar bg-base-200 shadow-sm p-5">
        <div className="navbar-start">
            {user && <p>{user.email}</p>}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end space-x-3">
            <img className='w-9' src={user ? user.photoURL : userimg} alt="" />
          {user ?<Link onClick={handleSignOut} className="btn px-8 bg-[#403F3F] text-base-100">SignOut</Link> :<Link to="/auth/login" className="btn px-8 bg-[#403F3F] text-base-100">Login</Link>}
        </div>
      </div>
    );
};

export default Navbar;