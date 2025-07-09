import { useState } from 'react'

interface taskProps {
    onAddTask: (title: string) => void
}

export default function AddTask({onAddTask}: taskProps) {
    const [input, setInput] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if(input.trim()){
            onAddTask(input)
            setInput('')
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Add Task'
                />
                <button type='submit'>Add</button>
            </form>
        </>
    )
}