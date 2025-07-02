

export default function Tasks({tasks, onDeleteTask}) {

    return (
        <>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.title}
                        <input type='checkbox' checked={task.complete} onClick={onDeleteTask}></input>
                    </li>
                ))}
            </ul>
        </>
    )
}