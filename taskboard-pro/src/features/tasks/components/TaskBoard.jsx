import { useReducer, useState, useCallback, useMemo} from "react"
import { TaskForm } from "./TaskForm"
import { TaskList } from "./TaskList"
import { TASK_UI_CONSTANTS } from "../constants/task-ui.constants"
import { taskReducer } from "../reducer/task.reducer"
import { TASK_ACTION_TYPES } from "../reducer/task.reducer.types"
import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"
import { TaskFilters } from "./TaskFilters"


export function TaskBoard() {
  const [taskText, setTaskText] = useState("")
  const [tasks, setTasks] = useReducer(taskReducer, [])
  const [statusFilter, setStatusFilter] = useState(TASK_STATUS.ALL)
  const [searchText, setSearchText] = useState("")

  const { SECTION, H2 } = HTML_TAGS

  const handleTaskTextChange = (event) => {
    setTaskText(event.target.value)
  }

  const handleAddTask = useCallback(() => {
    if (taskText.trim() === "") {
      return
    }

    const newTask = {
      id: Date.now(),
      title: taskText,
      completed: false,
    }

    setTasks({
       type: TASK_ACTION_TYPES.ADD_TASK,
       payload: newTask 
    })
    setTaskText("")

    
  }, [])
  
  const handleToggleTask  = useCallback((id) => {
      setTasks({
        type: TASK_ACTION_TYPES.TOGGLE_TASK,
        payload: id
      })
    }, [])

    const handleDeleteTask = useCallback((id) => {
      setTasks({
        type: TASK_ACTION_TYPES.DELETE_TASK,
        payload: id
      })
    }, [])


 const handleSearchTextChange = (event) => { 
    setSearchText(event.target.value)
  }

  const handleStatusFilterChange = (event) => { 
    setStatusFilter(event.target.value)
  }

 const filteredTasks = useMemo(() => { 
    return tasks.filter((task) => {
      const matchesText = task.title
        .toLowerCase()
        .includes(searchText.toLowerCase())

      const matchesStatus =
        statusFilter === TASK_STATUS.ALL
          ? true
          : statusFilter === TASK_STATUS.COMPLETED
          ? task.completed
          : !task.completed

      return matchesText && matchesStatus
    })
  }, [tasks, searchText, statusFilter])

  return (
    <SECTION>
      <H2>{TASK_UI_CONSTANTS.TASK_BOARD_TITLE}</H2>

      <TaskForm 
        onAddTask={handleAddTask} 
        taskText={taskText} 
        onTaskTextChange={handleTaskTextChange} 
      />

      <TaskList tasks={tasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask} />
    </SECTION>
  )
}