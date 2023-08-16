import React, { useEffect, useState } from 'react'
import TwitterFollowCard from './TwitterFollowCard'
import ShowMoreToFollow from './ShowMoreToFollow'



function WhoToFollowContainer({users}) {
  const [nUsers, setNUsers] = useState(1);
  const totalUsers = users.length

  const visibleUsers = []
  
  const loadUsers = () => {
    for (let i = 0; i < nUsers; i++) {
      visibleUsers.push(users[i])
    }
  }
  loadUsers()

  return (
    <div className='w-96 h-96 m-4 rounded-lg bg-neutral-800 flex flex-col'>
      <div className='p-4 border-b-2 border-[#dadada5e] h-[20%]'>
        <h3 className='font-medium text-white text'> Who To Follow </h3>
      </div>
      {visibleUsers.map((user, index) => (
      <TwitterFollowCard name={user.name} key={index} username={user.username} isFollowing={user.following} userPic={user.userPic} />
      ))}
      <div className='h-14'>
        <ShowMoreToFollow setnUsers={setNUsers} nUsers={nUsers} totalUsers={totalUsers} />
      </div>
    </div>
  )
}

export default WhoToFollowContainer