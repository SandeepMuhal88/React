import { useState } from "react";
function App() {
  const RGB =()=>{
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r},${g},${b})`
  }

  const [count, setColor] = useState("red")
  return (
    <div className="Container" style={{backgroundColor:color}}>
      <button onClick={()=>setColor(RGB)}>Change color</button>
    </div>
  )
}
export default App;