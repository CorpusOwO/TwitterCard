import React from 'react'

function ShowMoreToFollow({setnUsers, nUsers, totalUsers}) {
  if (nUsers < totalUsers) {
    return (
      <button className="w-full h-full hover:bg-neutral-700 text-[#e0245e] rounded-b-lg"
      onClick={() => setnUsers(nUsers + 1)}
      >
          Show More
      </button>
    )
  } else{
    return (
      <button type='disabled' className="w-full h-full bg-[#e0245e] text-white font-medium rounded-b-lg"
      >
          No more users to show
      </button>
    )
  }

}

export default ShowMoreToFollow