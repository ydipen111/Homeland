import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormdata] = useState({}); // Correct initialization of useState

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/auth/signIn', { // Ensure endpoint matches the server
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(`Network response was not ok. Status: ${res.status}`);
      }

      const data = await res.json();
      console.log(data);

    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In
        <span> <NavLink to='/Profile'>Profile</NavLink></span>
      </h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
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
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-80'>Sign In</button>

      </form>
      <Outlet />

    </div>
  );
};

export default SignIn;
