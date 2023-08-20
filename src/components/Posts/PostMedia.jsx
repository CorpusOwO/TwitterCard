import PostDescription from "./PostDescription";

function PostMedia() {
  return (
    <>
      <PostDescription />
      <img
        className="mt-2 rounded-2xl border border-gray-100 dark:border-gray-700"
        src="https://pbs.twimg.com/media/EpkuplDXEAEjbFc?format=jpg&name=medium"
      />
    </>
  );
}

export default PostMedia;
