import chessLogo from '/chessLong.png'
import './App.css'
import { useEffect } from 'react'

export default function Main() {

  useEffect(() => {
    setInterval(clockUpdate, 1000)
  })

  return (
    <>
      <header>
        <img src={chessLogo} alt='Chess.com' />
        <h1>Tournament</h1>
        <div id='clockTime'></div>
      </header>
    </>
    
  )
}

function clockUpdate() {
  const date = new Date()
  const time = date.toLocaleTimeString()
  document.getElementById('clockTime').textContent = time
}
