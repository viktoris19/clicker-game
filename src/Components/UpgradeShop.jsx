import React from 'react'

const UpgradeShop = ({ resources, setResources, clickPower, setClickPower }) => {
  const upgrades = [
    {
      id: 1,
      name: "Better Clicks",
      cost: 50,
      description: "+1 click power",
      action: () => setClickPower(prev => prev + 1)
    }
  ]

  const purchaseUpgrade = (upgrade) => {
    if (resources.credits >= upgrade.cost) {
      setResources(prev => ({
        ...prev,
        credits: prev.credits - upgrade.cost
      }))
      upgrade.action()
    }
  }

}

export default UpgradeShop