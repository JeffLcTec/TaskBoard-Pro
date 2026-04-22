import "../../../App.css"
import { TASK_UI_CONSTANTS } from "../constants/task-ui.constants"
import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"
import { TaskItem } from "./TaskItem"
export function TaskList({ tasks, onToggleTask, onDeleteTask }) {
    const { SECTION, H3, P, UL, LI } = HTML_TAGS
    return (
        <SECTION>
            <H3>{TASK_UI_CONSTANTS.TASK_LIST_TITLE}</H3>
              
              {tasks.length === 0 ? (
                    <P>{TASK_UI_CONSTANTS.TASK_LIST_EMPTY}</P>
                ) : (
                    <UL>
                    {tasks.map((task) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            onToggleTask={onToggleTask}
                            onDeleteTask={onDeleteTask}
                        />
                    ))}
                    </UL>
                )}
        </SECTION>
    )
}