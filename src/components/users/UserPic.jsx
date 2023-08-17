export default function UserPic({ userPic = "https://unavatar.io/CorpusOwO" }) {
  return (
    <img
      src={userPic}
      alt={`${userPic} profile photo`}
      className=" w-12 h-12 rounded-full"
    />
  );
}
