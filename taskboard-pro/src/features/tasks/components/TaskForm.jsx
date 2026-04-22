import "../../../App.css"
import { TASK_UI_CONSTANTS } from "../constants/task-ui.constants"
import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"
import { useId, useEffect, useRef } from "react"

export function TaskForm({ onAddTask, taskText, onTaskTextChange }) {
    const { SECTION, H2, INPUT, BUTTON } = HTML_TAGS

    const taskInputId = useId()
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <SECTION>
            <H2>{TASK_UI_CONSTANTS.ADD_TASK_BUTTON}</H2>
            <label htmlFor={taskInputId}>{TASK_UI_CONSTANTS.TASK_INPUT_TITLE}</label>
            <INPUT 
                id={taskInputId}
                ref={inputRef}
                type="text" 
                value={taskText} 
                onChange={onTaskTextChange} 
                placeholder={TASK_UI_CONSTANTS.INPUT_PLACEHOLDER}
            />

            <BUTTON 
                onClick={onAddTask}>
                {TASK_UI_CONSTANTS.ADD_TASK_BUTTON}
            </BUTTON>
        </SECTION>
    )
}