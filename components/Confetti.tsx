'use client'

import { useState, useEffect } from 'react'
import ReactConfetti from 'react-confetti'

interface ConfettiProps {
  duration?: number
}

export const Confetti: React.FC<ConfettiProps> = ({ duration = 5000 }) => {
  const [isActive, setIsActive] = useState(true)
  const [windowDimension, setWindowDimension] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setWindowDimension({ width: window.innerWidth, height: window.innerHeight })

    const handleResize = () => {
      setWindowDimension({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('resize', handleResize)

    const timer = setTimeout(() => {
      setIsActive(false)
    }, duration)

    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timer)
    }
  }, [duration])

  return isActive ? (
    <ReactConfetti
      width={windowDimension.width}
      height={windowDimension.height}
      recycle={false}
      numberOfPieces={200}
    />
  ) : null
}

