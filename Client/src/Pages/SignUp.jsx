import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormdata] = useState({});
  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  console.log(formData);


  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In
        <span> <NavLink to='/Profile'>Profile</NavLink></span>
      </h1>
      <form onChange={handleChange} className='flex flex-col gap-4'>
        <input
          onChange={handleChange}
          type="text"
          placeholder='UserName'
          className='border p-3 rounded-lg'
          id='Name'
        />
        <input
          onChange={handleChange}
          type="email"
          placeholder='Email'
          className='border p-3 rounded-lg'
          id='email'
        />
        <input
          onChange={handleChange}
          type="password"
          placeholder='Password'
          className='border p-3 rounded-lg'
          id='Password'
        />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-80'>
          sign up
        </button>

        <NavLink to='/sign-in'>Sign In</NavLink>

      </form>
      <Outlet />

    </div>
  );
};

export default SignUp;
