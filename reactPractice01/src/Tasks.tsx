import type {Task} from './types'

interface tasksProps {
    tasks: Task[],
    onDeleteTask: (id: number) => void
    onToggleEditing: (id: number) => void
    onEditTitle: (id:number, title:string) => void
    onToggleComplete: (id: number) => void
}

const handleSubmit = () => {

}

export default function Tasks({tasks, onDeleteTask, onToggleEditing, onEditTitle, onToggleComplete}: tasksProps) {

    return (
        <>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.isEditing ? (
                            <form onSubmit={() => handleSubmit}></form>
                        )
                        {task.title}}
                        <input type='checkbox'
                        checked={task.complete}
                        onChange={() => 
                            onToggleComplete(task.id)}/>
                        <button onClick={() =>
                            onToggleEditing(task.id)}>Edit</button>
                        <button onClick={() =>
                            onDeleteTask(task.id)}>X</button>
                    </li>
                ))}
            </ul>
        </>
    )
}