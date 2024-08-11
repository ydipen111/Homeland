import React from 'react';
import { useState } from 'react';

const SignUp = () => {


  return (
    <div className='max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold py-5 mt-4 '>Sign Up   </h1>

      <form action="" className='flex flex-col gap-4 '>
        <input type="text" placeholder='UserName' className='border p-3 rounded-lg' id='Name' />
        <input type="text" placeholder='Email' className='border p-3 rounded-lg' id='Name' />
        <input type="text" placeholder='Password' className='border p-3 rounded-lg' id='Name' />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-80'>Sign up</button>
      </form>
      <div>
        <p>Have an account?</p>
        <span> Sign</span>
      </div>


    </div>
  );
}

export default SignUp;
