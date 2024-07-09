import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
    inputData: '',
    newTodoCount: 1,
  }

  deleteTodo = id => {
    // console.log(id)
    const {todosList} = this.state
    const updatedTodosList = todosList.filter(eachTodo => eachTodo.id !== id)

    this.setState({todosList: updatedTodosList})
  }

  onChangeInputValue = event => {
    // console.log(event.target.value)
    this.setState({[event.target.name]: event.target.value})
  }

  onAddNewTask = () => {
    // console.log("Add Btn Clicked")
    const {inputData, newTodoCount} = this.state

    const newTodoItem = Array.from({length: newTodoCount}, (_, i) => ({
      id: uuidV4() + i,
      title: inputData,
    }))
    this.setState(prevState => ({
      todosList: [...prevState.todosList, ...newTodoItem],
      inputData: '',
      newTodoCount: 1,
    }))
  }

  onSaveExitingTask = (id, taskTitle) => {
    const {todosList} = this.state
    const newUpdatedList = todosList.map(eachTodo => {
      if (eachTodo.id === id) {
        return {...eachTodo, title: taskTitle}
      }
      return eachTodo
    })
    this.setState({todosList: newUpdatedList})
  }

  render() {
    const {todosList, inputData, newTodoCount} = this.state
    // console.log(todosList)
    return (
      <div className="app-container">
        <div className="simple-todos-container">
          <h1 className="heading">Simple Todos</h1>
          <div className="input-container">
            <input
              type="text"
              name="inputData"
              className="input-text"
              placeholder="Add Task"
              value={inputData}
              onChange={this.onChangeInputValue}
            />
            <input
              type="number"
              name="newTodoCount"
              className="input-text-num"
              value={newTodoCount}
              onChange={this.onChangeInputValue}
              placeholder="Enter number of todos"
            />
            <button
              className="add-task-btn"
              type="button"
              onClick={this.onAddNewTask}
            >
              Add
            </button>
          </div>
          <ul className="todos-list">
            {todosList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteTodo={this.deleteTodo}
                onEditedTask={this.onSaveExitingTask}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
