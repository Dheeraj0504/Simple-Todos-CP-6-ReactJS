// Write your code here
import {useState} from 'react'
import './index.css'

const TodoItem = props => {
  // console.log(props)
  const {todoDetails, deleteTodo, onEditedTask} = props
  const {id, title} = todoDetails

  const [isEdited, setIsEdited] = useState(false)
  const [isChecked, setCheck] = useState(false)
  const [taskTitle, setTaskTitle] = useState(title)

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  const onSaveEditTask = () => {
    setIsEdited(false)
    onEditedTask(id, taskTitle)
  }

  const onClickEditBtn = () => {
    // console.log("Edit Btn clicked")
    setIsEdited(true)
  }

  const onChangeTitle = event => {
    setTaskTitle(event.target.value)
  }

  const onChangeCheckInput = event => {
    setCheck(event.target.checked)
  }

  const isCheckedTrue = isChecked ? 'checked-title' : ''
  // console.log(isChecked)

  return (
    <li className="todo-item">
      {isEdited ? (
        <div className="input-text-container">
          <input
            className="edit-input"
            type="text"
            value={taskTitle}
            onChange={onChangeTitle}
          />
          <button
            className="save-edit-btn"
            type="button"
            onClick={onSaveEditTask}
          >
            Save
          </button>
        </div>
      ) : (
        <div className="input-text-container">
          <div className="input-container">
            <input
              className="check-box"
              type="checkbox"
              id={id}
              checked={isChecked}
              onChange={onChangeCheckInput}
            />
            <p className={`title ${isCheckedTrue}`} htmlFor={id}>
              {title}
            </p>
          </div>
          <button
            className="save-edit-btn"
            type="button"
            onClick={onClickEditBtn}
          >
            Edit
          </button>
        </div>
      )}
      <button type="button" className="delete-btn" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
