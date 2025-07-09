import './App.css'
import Tasks from './Tasks.tsx'
import AddTasks from './AddTask.tsx'
import { useState } from 'react'
import type {Task} from './types'

function App() {

  const initialTasks: Task[] = [
    { id: 1, title: 'buy toothpaste', complete: false, isEditing: false},
    { id: 2, title: 'do homework', complete: true, isEditing: false},
    { id: 3, title: 'go to the gym', complete: false, isEditing: false}
  ]  

  const[id, setId] = useState(4)

  const[tasks, setTasks] = useState(initialTasks)

  const handleDeleteTask = (id: number) => {
    setTasks(tasks => tasks.filter(task => task.id != id))
  }

  const handleAddTask = (title: string) => {
    setTasks(tasks => [
      ...tasks,
      {id: id, title: title, complete: false, isEditing:false}
    ])
    setId(id + 1)
  }

  const handleToggleEditing = (id: number) => {
    setTasks(tasks => 
      tasks.map(task => 
        task.id === id ? {...task, isEditing: !task.isEditing}: task
      ))
  }

  const handleEditTitle = (id: number, title: string) => {
    setTasks(tasks =>
      tasks.map(task =>
        task.id === id ? {...task, title: title}: task
      )
    )
  }

  const handleToggleComplete = (id: number) => {
    setTasks(tasks =>
      tasks.map(task =>
        task.id === id ? {...task, complete: !task.complete}: task
      ))
  }

  return (
    <>
      <h1>TODOList</h1>
      <Tasks tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onToggleEditing={handleToggleEditing}
        onEditTitle={handleEditTitle}
        onToggleComplete={handleToggleComplete}/>
      <AddTasks onAddTask={handleAddTask}/>
    </>
  )
}

export default App
