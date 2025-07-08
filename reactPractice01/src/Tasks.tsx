import type {Task} from './types'

interface tasksProps {
    tasks: Task[],
    onDeleteTask: (id: number) => void
}

export default function Tasks({tasks, onDeleteTask}: tasksProps) {

    return (
        <>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.title}
                        <input type='checkbox' checked={task.complete} onClick={() => onDeleteTask(task.id)}></input>
                    </li>
                ))}
            </ul>
        </>
    )
}