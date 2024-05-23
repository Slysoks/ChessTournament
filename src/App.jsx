import chessLogo from '/chessLong.png'
import checkerExample from '/src/assets/checkerExample.jpeg'
import './App.css'
import { useEffect } from 'react'

export default function Main() {

  useEffect(() => {
    clockUpdate()
    setInterval(clockUpdate, 1000)
  })

  return (
    <div>
      <header>
        <img src={chessLogo} alt='Chess.com' />
        <h1>Tournament</h1>
        <div id='clockTime'></div>
      </header>
      <main>
        <div className='game'>
          <h2>Game 1</h2>
          <img src={checkerExample} alt='Checkers' />
          <p>Game 1 description</p>
        </div>
        <div className='game'>
          <h2>Game 2</h2>
          <img src={checkerExample} alt='Checkers' />
          <p>Game 2 description</p>
        </div>
        <div className='game'>
          <h2>Game 3</h2>
          <img src={checkerExample} alt='Checkers' />
          <p>Game 3 description</p>
        </div>
        <div className='game'>
          <h2>Game 4</h2>
          <img src={checkerExample} alt='Checkers' />
          <p>Game 4 description</p>
        </div>
        <div className='game'>
          <h2>Game 5</h2>
          <img src={checkerExample} alt='Checkers' />
          <p>Game 5 description</p>
        </div>
        <div className='game'>
          <h2>Game 6</h2>
          <img src={checkerExample} alt='Checkers' />
          <p>Game 6 description</p>
        </div>
      </main>
    </div>
    
  )
}

function clockUpdate() {
  const date = new Date()
  const time = date.toLocaleTimeString()
  document.getElementById('clockTime').textContent = time
}
