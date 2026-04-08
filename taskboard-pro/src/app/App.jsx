import { useState } from 'react'
import '../App.css'
import { TaskBoard } from '../features/tasks/components/TaskBoard.jsx'
import { TaskForm } from '../features/tasks/components/TaskForm.jsx'

function App() {

  return (
    <main>
      <h1>TaskBoard Pro</h1>
      <TaskBoard />
    
      <p>TaskBoard Pro is a task management application.</p>
      
      <button>Crear Tarea</button>
      <button>Filtrar Por Nombre</button>
      <button>Filtrar Por Estado</button>
      
    </main>
  )
}

export default App
