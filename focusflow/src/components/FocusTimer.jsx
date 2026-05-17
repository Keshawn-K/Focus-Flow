// Import React state hook
import { useState, useRef } from "react"

// Focus Timer component
const FocusTimer = () => {

  // Track time in seconds
  const [seconds, setSeconds] = useState(0)

  // Track if timer is running
  const [isRunning, setIsRunning] = useState(false)

  // Store interval ID so we can stop it
  const intervalRef = useRef(null)

  // Start timer function
  const startTimer = () => {

    if (isRunning) return

    setIsRunning(true)

    // Increase time every 1 second
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)
  }

  // Stop timer function
  const stopTimer = () => {

    setIsRunning(false)

    // Clear interval
    clearInterval(intervalRef.current)
  }

  // Reset timer function
  const resetTimer = () => {

    stopTimer()
    setSeconds(0)
  }

  // Convert seconds into MM:SS format
  const formatTime = (totalSeconds) => {

    const minutes = Math.floor(totalSeconds / 60)
    const remainingSeconds = totalSeconds % 60

    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  return (

    <div className="bg-white p-6 rounded-xl shadow-md text-center">

      {/* Timer display */}
      <h2 className="text-4xl font-bold mb-6">
        {formatTime(seconds)}
      </h2>

      {/* Buttons */}
      <div className="flex justify-center gap-4">

        <button
          onClick={startTimer}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Start
        </button>

        <button
          onClick={stopTimer}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Stop
        </button>

        <button
          onClick={resetTimer}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Reset
        </button>

      </div>

    </div>
  )
}

export default FocusTimer