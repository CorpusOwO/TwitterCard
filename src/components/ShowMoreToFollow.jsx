import React from 'react'

function ShowMoreToFollow({setnUsers, nUsers}) {
  return (
    <button className='w-full h-full hover:bg-neutral-700 text-[#e0245e] rounded-b-lg'
    onClick={() => setnUsers(nUsers + 1)}
    >
        Show More
    </button>
  )
}

export default ShowMoreToFollow