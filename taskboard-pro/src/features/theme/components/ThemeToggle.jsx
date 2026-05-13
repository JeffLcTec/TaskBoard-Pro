import { useTheme } from "../hooks/useTheme"
import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { BUTTON } = HTML_TAGS
  
  return (
    <BUTTON onClick={toggleTheme}>
      Tema actual: {theme}
    </BUTTON>
  )
}