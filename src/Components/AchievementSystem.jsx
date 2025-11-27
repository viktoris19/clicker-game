import React from 'react'

const AchievementSystem = ({ resources }) => {
  const achievements = [
    {
      id: 1,
      name: "Начальный уровень",
      description: "Собери 10 энергий",
      condition: resources.energy >= 10
    }
  ]

  return (
    <div className="achievements">
      <h2>Достижения</h2>
      <div className="achievements-list">
        {achievements.map(achievement => (
          <div 
            key={achievement.id} 
            className={`achievement ${achievement.condition ? 'unlocked' : 'locked'}`}
          >
            <h3>{achievement.name}</h3>
            <p>{achievement.description}</p>
            <span>{achievement.condition ? '✅ Unlocked' : '🔒 Locked'}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AchievementSystem