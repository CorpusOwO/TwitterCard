function SmallUserProfile({
  userPic = "https://unavatar.io/CorpusOwO",
  name = "default",
  username = "default",
}) {
  return (
    <div className="flex gap-4">
      <img
        src={userPic}
        alt="profile user pic"
        className=" w-12 h-12 rounded-full"
      />
      <div>
        <p className="font-semibold text-white">{name}</p>
        <small className="text-gray-400"> @{username} </small>
      </div>
    </div>
  );
}

export default SmallUserProfile;
