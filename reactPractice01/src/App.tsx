import './App.css'
import Tasks from './Tasks.tsx'
import AddTasks from './AddTask.tsx'
import { useState } from 'react'
import type {Task} from './types'

function App() {

  const initialTasks: Task[] = [
    { id: 1, title: 'buy toothpaste', complete: false},
    { id: 2, title: 'do homework', complete: true},
    { id: 3, title: 'go to the gym', complete: false}
  ]  

  const[tasks, setTasks] = useState(initialTasks)

  const handleDeleteTask = (id: number) => {
    setTasks(tasks => tasks.filter(task => task.id != id))
  }

  return (
    <>
      <h1>TODOList</h1>
      <Tasks tasks={tasks} onDeleteTask={handleDeleteTask}/>
      <AddTasks onAddTask={setTasks}/>
    </>
  )
}

export default App
