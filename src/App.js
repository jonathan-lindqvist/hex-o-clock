import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  let [hex, setHex] = useState("")
  
  const tick = () => {
    const date = new Date()

    let hex =  "#" + (date.getHours()<10?'0':'') + date.getHours() + (date.getMinutes()<10?'0':'') + date.getMinutes() + (date.getSeconds()<10?'0':'') + date.getSeconds()

    setHex(hex)
  }
  
  useEffect(() => {
    setInterval(() => tick(), 1000);
  })

  return (
    <div className="App" style={{backgroundColor: hex}}>
      <h1>{hex}</h1>
    </div>
  );
}

export default App
