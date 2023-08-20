function RepliyingTo({ username = "default" }) {
  return (
    <button className="text-gray-100/40 gap-1 flex">
      Repliying to <p className="text-blue-500"> @{username} </p>
    </button>
  );
}

export default RepliyingTo;
