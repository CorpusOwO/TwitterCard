import PostsContainer from "./components/Posts/PostsContainer";
import WhoToFollowContainer from "./components/WhotoFollow/WhoToFollowContainer";
import Sidebard from "./components/layout/Sidebard/Sidebard";
import data from "./data";

function App() {
  return (
    <div className="w-screen h-screen bg-neutral-900 flex justify-between">
      <Sidebard />
      <PostsContainer />
      <WhoToFollowContainer users={data} />
    </div>
  );
}

export default App;
