import { useState } from 'react'
import './App.css'

function App({ minDamage = 0, maxDamage = 25 }) {
  const [playerHealth, setPlayerHealth] = useState(100);
  const [cpuHealth, setCPUHealth] = useState(100);

  const [gameOver, setGameOver] = useState(false);

  function handleAttack() {
    const playerAttack = Math.floor(Math.random() * (maxDamage - minDamage + 1) + minDamage);
    const cpuAttack = Math.floor(Math.random() * (maxDamage - minDamage + 1) + minDamage);

    const newPlayerHealth = Math.max(playerHealth - cpuAttack, 0);
    const newCPUHealth = Math.max(cpuHealth - playerAttack, 0);

    setPlayerHealth(newPlayerHealth);
    setCPUHealth(newCPUHealth);

    if (newPlayerHealth === 0 || newCPUHealth === 0)
      setGameOver(true);
  }

  function handleRestart() {
    setPlayerHealth(100);
    setCPUHealth(100);
    setGameOver(false);
  }

  function endGameStatus() {
    if (gameOver === false)
      return "Engage the enemy!";

    if (playerHealth === 0) {
      return "Mission failed!";
    } else if (cpuHealth === 0) {
      return "Congratulations, you won!";
    } else if (playerHealth === 0 && cpuHealth === 0) {
      return "It's a draw!";
    }
  }

  return (
    <>
      <div id="header"><h1>Space Battle Simulator</h1></div>

      <div id="game-container">
        <div id="player">Player Health: {
          `${playerHealth === 0 ? 'Dead' : playerHealth}`
        }</div>

        {gameOver === false ?
          <button id="fire-button" onClick={handleAttack}>Fire!</button>
          : <button id="restart-button" onClick={handleRestart}>Restart?</button>}

        <div id="computer">
          Enemy Health: {
            `${cpuHealth === 0 ? 'Dead' : cpuHealth}`
          }
        </div>
      </div>

      <div id="footer"><p>{endGameStatus()}</p></div>
    </>
  )
}

export default App
