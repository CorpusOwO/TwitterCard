import React from 'react'
import SmallUserProfile from '../users/SmallUserProfile'
import PostActions from './PostActions'
import PostMedia from './PostMedia'

function PostCard() {
return (
<>
  <div
    className="bg-white dark:bg-neutral-800  border-gray-200 dark:border-neutral-800  p-4 rounded-xl border max-w-xl">
    <SmallUserProfile />
    <PostMedia />
    <p className="text-gray-500 dark:text-gray-400 text-base py-1 my-0.5">10:05 AM · Dec 19, 2020</p>
      <PostActions />
  </div>
</>
)
}

export default PostCard