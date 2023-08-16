import React, { useState } from 'react'
import userDefaultPic from '../../assets/user-default-pic.jpg'
import FollowButton from './FollowButton'
import SmallUserProfile from '../users/SmallUserProfile'

function TwitterFollowCard({userPic = userDefaultPic, name, username, isFollowing}) {
return (
<div className=''>
  <div
    className='bg-transparent w-full text-white p-6 flex justify-between hover:bg-neutral-700 border-b-2 border-[#dadada5e]'>
    <SmallUserProfile userPic={userPic} name={name} username={username}/>
    <FollowButton follow={isFollowing} />
  </div>
</div>
)
}

export default TwitterFollowCard