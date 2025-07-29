import { useState } from "react"
import Checkbox from "./components/Checkbox"
import Video from "./components/video"

function App() {
  let todoList = [
    {
      text: "Coding react",
      isChecked: false
    },
    {
      text: "Doing Document react",
      isChecked: true
    }
  ]
  const [result, setResult] = useState(0)
  const [playing, setPlaying] = useState(false)

  function buttonClick() {
    setResult(result + 1)
  }
  function buttonPlayVideo () {
    setPlaying(!playing)
  }
  return (
    <>
    <div>
      Click New {result}
      <button onClick={buttonClick}>Click</button>
    </div>
    <div>
      <Video src={"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"} isPlaying={playing}/>
      <button onClick={buttonPlayVideo}>{ playing ? "Pause" : "Play"}</button>
    </div>
      <div>
        {
          todoList.map((todo, index) => (
            <Checkbox key={index} text={todo.text} isChecked={todo.isChecked} />
          ))
        }
      </div>
    </>
  )
}

export default App
