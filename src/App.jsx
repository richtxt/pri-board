import { useState, useEffect } from 'react'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import './App.css'

function App() {
  const [showDashboard, setShowDashboard] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleGetStarted = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setShowDashboard(true)
      setIsTransitioning(false)
    }, 600)
  }

  const handleBackToLanding = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setShowDashboard(false)
      setIsTransitioning(false)
    }, 400)
  }

  return (
    <div className={`app ${isTransitioning ? 'transitioning' : ''}`}>
      {!showDashboard ? (
        <Landing onGetStarted={handleGetStarted} />
      ) : (
        <Dashboard onBackToLanding={handleBackToLanding} />
      )}
    </div>
  )
}

export default App
