import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-3 my-8'>
      <img className='w-[400px]' src={logo} alt="" />
      <p className='text-[#706F6F]'>Journalism Without Fear or Favour</p>

      <p className='text-[#706F6F]'>{format(new Date(), "EEEE, MMMM dd, yyy")}</p>
    </div>
  );
};

export default Header;