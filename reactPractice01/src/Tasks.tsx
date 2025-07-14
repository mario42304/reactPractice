import type {Task} from './types'
import { useState } from "react";

interface TasksProps {
    tasks: Task[],
    onDeleteTask: (id: number) => void
    onToggleEditing: (id: number) => void
    onEditTitle: (id:number, title:string) => void
    onToggleComplete: (id: number) => void
}

interface EditHandler {
    e: React.FormEvent,
    id: number
}

export default function Tasks({tasks, onDeleteTask, onToggleEditing, onEditTitle, onToggleComplete}: TasksProps) {
    const [input, setInput] = useState('')

    const handleEdit = ({e, id}: EditHandler) => {
        e.preventDefault()
        if(input.trim()){
            onEditTitle(id, input)
            setInput('')
            onToggleEditing(id)
        }
    }

    return (
        <>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.isEditing ? (
                            <form onSubmit={e => handleEdit({e, id: task.id})}>
                                <input type='text'
                                value={input}
                                onChange={e => {
                                    setInput(e.target.value)
                                }}
                                />
                                <button type='submit'>Save</button>
                                <button onClick={() => onToggleEditing(task.id)}>Cancel</button>
                            </form>
                        ) : (
                        <>
                        {task.title}
                        <input type='checkbox'
                            checked={task.complete}
                            onChange={() => 
                                onToggleComplete(task.id)}
                        />
                        <button onClick={() => {
                            setInput(task.title)
                            onToggleEditing(task.id)
                        }}>Edit</button>
                        <button onClick={() =>
                            onDeleteTask(task.id)}>X</button>
                        </>
                        )}
                        
                    </li>
                ))}
            </ul>
        </>
    )
}