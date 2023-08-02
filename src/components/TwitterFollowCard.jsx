import React from 'react'
import userDefaultPic from '../assets/user-default-pic.jpg'

function TwitterFollowCard({userPic = userDefaultPic, name, username, isFollowing}) {
  return (
    <div className='bg-neutral-800 w-full text-white p-6 flex'>
        <div>
            <img src={userPic} alt="profile user pic" className=' w-16 h-12 rounded-full'  />
            <div>
                <p className='font-semibold'>{name}</p>
                <small> @{username} </small>
            </div>
        </div>
        <button> dsdsad {isFollowing} </button>
    </div>
  )
}

export default TwitterFollowCard