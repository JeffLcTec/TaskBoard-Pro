import '../App.css'
import { TaskBoard } from '../features/tasks/components/TaskBoard.jsx'
import { HTML_TAGS } from '../shared/constants/html-tags.constants.js'
import { ThemeProvider } from '../features/theme/context/ThemeProvider.jsx'
import { useTheme } from '../features/theme/hooks/useTheme.js'
import { ThemeToggle } from '../features/theme/components/ThemeToggle.jsx'
import {useDocumentTitle} from "../shared/hooks/useDocumentTitle.js"
import "../index.css"

function AppContent() {
  const { MAIN, H1 } = HTML_TAGS
  const { theme } = useTheme()
  useDocumentTitle("TaskBoard Pro")

  return (
    <MAIN className={theme}>
      {/* <TitleTag>TaskBoard Hooks Lab</TitleTag> */}
      <TaskBoard />
      <ThemeToggle />
    </MAIN>
  )

}
function App() {
  return (
    <ThemeProvider>  
      <AppContent/>
    </ThemeProvider>
  )
}

export default App
