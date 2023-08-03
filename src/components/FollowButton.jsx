import React, { useState } from 'react'

function FollowButton({follow}) {
  const [following, setIsFollowing] = useState(follow);

    return (
        <button 
        className={following ? "h-[45px] px-3 bg-[#e0245e] text-white font-medium rounded-xl" : " h-[45px] px-3  border-2 border-[#e0245e] font-medium rounded-xl hover:bg-[#e0245e] hover:text-white transition-all text-[#e0245e]"}
        onClick={ () => setIsFollowing(following ? false : true)}
        > {following ? "Unfollow" : "Follow" } </button>
        
    )
}

export default FollowButton