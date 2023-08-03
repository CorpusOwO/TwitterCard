
import WhoToFollowContainer from "./components/WhoToFollowContainer"
import data from './data'

function App() {


  return (
    <div className="w-screen h-screen bg-neutral-900">
      <WhoToFollowContainer users={data} />
    </div>
  )
}

export default App
