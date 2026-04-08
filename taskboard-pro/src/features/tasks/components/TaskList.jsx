import "../../../App.css"

export function TaskList({ tasks }) {
    return (
        <section className="task-list">
            <h3>Lista de tareas</h3>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.title}
                    </li>
                ))}
            </ul>
        </section>
    )
}