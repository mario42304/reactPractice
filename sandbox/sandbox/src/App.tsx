import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [isRunning, setIsRunning] = useState(false)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [miliseconds, setMiliseconds] = useState(0)
  const intervalRef = useRef(0)

  useEffect(() => {
    if(!isRunning) return

    intervalRef.current = setInterval(() => {
      setMiliseconds(prev => Math.max(prev - 1000, 0))
    }, 1000);

    return () => clearInterval(intervalRef.current)
  }, [isRunning])

  useEffect(() => {
    if(miliseconds === 0 && isRunning){
      clearInterval(intervalRef.current)
      setMiliseconds(0)
      alert('done')
      setIsRunning(false)
    }
  }, [isRunning, miliseconds])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setMiliseconds((minutes * 60 + seconds) * 1000)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="number" value={minutes} onChange={(e) => setMinutes(Number(e.target.value))} />
        <input type="number" value={seconds} onChange={(e) => setSeconds(Number(e.target.value))} />
        <button type="submit">Timer Set</button>
      </form>
      <p>{Math.floor(miliseconds / (60 * 1000))}:{miliseconds % (60 * 1000) / 1000}</p>
      {isRunning ? 
        <button onClick={() => setIsRunning(false)}>Stop</button>
        :
        <button onClick={() => setIsRunning(true)}>Start</button>
      }
      
    </>
  )
}

export default App
