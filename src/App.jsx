import { useState } from "react"
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"

//highest level parent component
//it gets rendered in main.jsx, which fetches the div element root id root
//root from main.jsx is then in index.html
function App() {

  const [todos, setTodos] = useState([]);

  function handleAddTodos(newTodo) {
    const newToDoList = [...todos, newTodo];
    setTodos(newToDoList);
  }

  function handleDeleteTodo(index) {
    const newToDoList = todos.filter((todo, toDoIndex) => {
      return toDoIndex !== index
    })
    setTodos(newToDoList);
  }

  function handleEditTodo(index) {
    
  }
  
  return (
    <>
      <ToDoInput handleAddTodos={handleAddTodos}/>
      <ToDoList handleDeleteTodo={handleDeleteTodo} todos={todos}/>      
    </>
  )
}

export default App
