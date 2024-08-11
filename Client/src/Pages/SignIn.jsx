import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      const res = await fetch('/api/auth/SignIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      console.log('Success:', data);
      // Handle success (e.g., redirect to a different page or show a success message)
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      // Handle error (e.g., show an error message)
    }
  };

  console.log('Form Data:', formData);

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign up</h1>
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
          type="email" // Change to 'email' for validation
          placeholder='Email'
          className='border p-3 rounded-lg'
          id='email'
        />
        <input
          onChange={handleChange}
          type="password" // Change to 'password' for security
          placeholder='Password'
          className='border p-3 rounded-lg'
          id='Password'
        />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-80'>Sign up</button>
      </form>
      <div className='flex gap-2 mt-4'>
        <p className=''>Have an account</p>
        <NavLink to={"/SignUp"}>
          <span className='text-blue-700'>Sign in</span>
        </NavLink>
      </div>
    </div>
  );
};

export default SignIn;
