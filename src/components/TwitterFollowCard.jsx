import React, { useState } from 'react'
import userDefaultPic from '../assets/user-default-pic.jpg'
import FollowButton from './FollowButton'

function TwitterFollowCard({userPic = userDefaultPic, name, username, isFollowing}) {
return (
<div className=''>
  <div
    className='bg-transparent w-full text-white p-6 flex justify-between hover:bg-neutral-700 border-b-2 border-[#dadada5e]'>
    <div className='flex gap-4'>
      <img src={userPic} alt="profile user pic" className=' w-12 h-12 rounded-full' />
      <div>
        <p className='font-semibold'>{name}</p>
        <small className='text-gray-400'> @{username} </small>
      </div>
    </div>
    <FollowButton follow={isFollowing} />
  </div>
</div>
)
}

export default TwitterFollowCard