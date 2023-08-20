import UserPic from "./UserPic";

function SmallUserProfile({ userPic, name = "default", username = "default" }) {
  return (
    <div className="flex gap-4">
      <div className="">
        <UserPic userPic={userPic} className="inline-block" />
        <p className="font-semibold text-white">{name}</p>
        <small className="text-gray-400"> @{username} </small>
      </div>
    </div>
  );
}

export default SmallUserProfile;
