import { useState } from 'react'
import '../App.css'
import { TaskBoard } from '../features/tasks/components/TaskBoard.jsx'
import { HTML_TAGS } from '../shared/constants/html-tags.constants.js'
import { ThemeProvider } from '../features/theme/context/ThemeProvider.jsx'
import { useTheme } from '../features/theme/hooks/useTheme.js'
function AppContent() {
  const { MAIN, H1, P, BUTTON } = HTML_TAGS
  const { theme } = useTheme
  return (
    
    <MAIN className= {theme}>
      <H1>TaskBoard Pro</H1>
      <TaskBoard />
    
      <p>TaskBoard Pro is a task management application.</p>
      
      <BUTTON>Crear Tarea</BUTTON>
      <BUTTON>Filtrar Por Nombre</BUTTON>
      <BUTTON>Filtrar Por Estado</BUTTON>
      
    </MAIN>
  )
}
function App() {
  <ThemeProvider >
    <AppContent/>
  </ThemeProvider>

}

export default App
