import React, { useState } from 'react'
import GameStats from './Components/GameStats.jsx'
import UpgradeShop from './Components/UpgradeShop.jsx'
import AchievementSystem from './Components/AchievementSystem.jsx'
import './App.css'

function App() {
  const [resources, setResources] = useState({
    energy: 0,
    credits: 100,
    minerals: 0
  })
  const [clickPower, setClickPower] = useState(1)

  const handleClick = () => {
    setResources(prev => ({
      ...prev,
      energy: prev.energy + clickPower
    }))
  }

  return (
    <div className="app">
      <h1>Clicker Game</h1>
      
      <div className="main-game">
        <button className="planet-click" onClick={handleClick}>
          Click Planet!
        </button>
        
        <GameStats resources={resources} />
      </div>

      <UpgradeShop 
        resources={resources}
        setResources={setResources}
        clickPower={clickPower}
        setClickPower={setClickPower}
      />

      <AchievementSystem resources={resources} />
    </div>
  )
}

export default App