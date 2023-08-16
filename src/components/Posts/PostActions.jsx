import React from 'react'
import {FaComment, FaRetweet, FaHeart, FaChartSimple, FaUpload} from 'react-icons/fa6'
function PostActions() {
return (
<div className="text-gray-500 dark:text-gray-400 flex mt-3 justify-around">
    <div className="flex items-center mr-6 ">
        <FaComment />
        <span className="ml-1">615</span>
    </div>
    <div className="flex items-center mr-6">
        <FaRetweet />
        <span className="ml-3">93</span>
    </div>
    <div className="flex items-center mr-6">
        <FaHeart />
        <span className="ml-3">103</span>
    </div>
    <div className="flex items-center mr-6">
        <FaChartSimple />
        <span className="ml-3">214</span>
    </div>
    <div className="flex items-center mr-6">
        <FaUpload />
    </div>
</div>
)
}

export default PostActions