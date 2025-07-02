import './App.css'
import Tasks from './Tasks.tsx'
import AddTasks from './AddTask.tsx'
import { useState } from 'react'

function App() {

  interface Task {
    id: number,
    title: string,
    complete: boolean
  }

  const initialTasks: Task[] = [
    { id: 1, title: 'buy toothpaste', complete: false},
    { id: 2, title: 'do homework', complete: true},
    { id: 3, title: 'go to the gym', complete: false}
  ]  

  const[tasks, setTasks] = useState(initialTasks)

  return (
    <>
      <h1>TODOList</h1>
      <Tasks tasks={tasks} onDeleteTask={setTasks}/>
      <AddTasks />
    </>
  )
}

export default App
