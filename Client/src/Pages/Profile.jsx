import React from 'react'
import { Outlet } from 'react-router-dom'
import horse from './../Images/horse.jpeg'

const Profile = () => {
  return (
    <div className='flex flex-col items-center mt-4 space-y-3'>
      <h1 className='text-md font-semibold'>Profile Page</h1>
      <form action="">
        <div className=''>
          <img className=' rounded-full h-24 w-24 object-cover cursor-pointer' src={horse} alt="" />
        </div>
      </form>
    </div>
  )
}

export default Profile
