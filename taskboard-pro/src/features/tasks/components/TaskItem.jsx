import { TASK_UI_CONSTANTS } from "../constants/task-ui.constants"
import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"

export function TaskItem({ task, onToggleTask, onDeleteTask }) {
  const { LI, SPAN, BUTTON } = HTML_TAGS
  return (
    <LI>
      <SPAN>
        {task.title} - {task.completed ? TASK_UI_CONSTANTS.STATUS_COMPLETED : TASK_UI_CONSTANTS.STATUS_PENDING}
      </SPAN>

      <BUTTON onClick={() => onToggleTask(task.id)}>
        {TASK_UI_CONSTANTS.TOGGLE_BUTTON}
      </BUTTON>

      <BUTTON onClick={() => onDeleteTask(task.id)}>
        {TASK_UI_CONSTANTS.DELETE_BUTTON}
      </BUTTON>
    </LI>
  )
}