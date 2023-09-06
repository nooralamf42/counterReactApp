import { useState } from "react"
import "./App.css"

function App() {
  const [value, setValue] = useState(0);
    let sound = new Audio("https://cdn.pixabay.com/audio/2023/06/15/audio_a0e2c53290.mp3")
  function addSubHandler(addSub){
    sound.currentTime = 0;
    sound.volume = .5;
    sound.play()
    setValue(eval(`${value} ${addSub} 1` ))
    console.log(value)
  }

  return (
    <div>
      <button onClick={()=>addSubHandler("-")}>-</button>
      <span>{value}</span>
      <button onClick={()=>addSubHandler("+")}>+</button>
    </div>
  )
}

export default App