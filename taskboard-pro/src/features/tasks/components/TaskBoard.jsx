import { useState } from "react"
import { TaskForm } from "./TaskForm"
import { TaskList } from "./TaskList"
import "../../../App.css"

export function TaskBoard() {
  const [taskText, setTaskText] = useState("")
  const [tasks, setTasks] = useState([])

  const handleTaskTextChange = (event) => {
    setTaskText(event.target.value)
  }

  const handleAddTask = () => {
    if (taskText.trim() === "") {
      return
    }

    const newTask = {
      id: Date.now(),
      title: taskText,
      completed: false,
    }

    setTasks([...tasks, newTask])
    setTaskText("")
  }

  return (
    <section className="task-board">
      <h2>Gestión de tareas</h2>

      <TaskForm 
        onAddTask={handleAddTask} 
        taskText={taskText} 
        onTaskTextChange={handleTaskTextChange} 
      />

      <TaskList tasks={tasks} />
    </section>
  )
}