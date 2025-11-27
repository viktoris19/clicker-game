import React from 'react'

const GameStats = ({ resources }) => {
  return (
    <div className="game-stats">
      <h2>Ресурсы</h2>
      <div className="stats-grid">
        <div className="stat">
          <span>Энергия: {resources.energy}</span>
        </div>
      </div>
    </div>
  )
}

export default GameStats