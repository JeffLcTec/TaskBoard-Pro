import { TASK_STATUS } from "../constants/task.constants"
import { TASK_UI_CONSTANTS } from "../constants/task-ui.constants"

export function TaskFilters({
  searchText,
  statusFilter,
  onSearchTextChange,
  onStatusFilterChange,
}) {
  return (
    <section>
      <h3>{TASK_UI_CONSTANTS.FILTERS_TITLE}</h3>

      <input
        type="text"
        value={searchText}
        onChange={onSearchTextChange}
        placeholder={TASK_UI_CONSTANTS.SEARCH_PLACEHOLDER}
      />

      <select value={statusFilter} onChange={onStatusFilterChange}>
        <option value={TASK_STATUS.ALL}>{TASK_UI_CONSTANTS.FILTER_ALL}</option>
        <option value={TASK_STATUS.PENDING}>{TASK_UI_CONSTANTS.FILTER_PENDING}</option>
        <option value={TASK_STATUS.COMPLETED}>{TASK_UI_CONSTANTS.FILTER_COMPLETED}</option>
      </select>
    </section>
  )
}