import "../../../App.css"

export function TaskForm({ onAddTask, taskText, onTaskTextChange }) {
    return (
        <section className="task-form">
            <h2>Agregar Tarea</h2>

            <input 
                type="text" 
                value={taskText} 
                onChange={onTaskTextChange} 
                placeholder="Escribe una tarea" 
            />

            <button 
                onClick={onAddTask}
            >
                Agregar
            </button>
        </section>
    )
}