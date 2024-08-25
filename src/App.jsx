import { useState } from "react"
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"

//highest level parent component
//it gets rendered in main.jsx, which fetches the div element root id root
//root from main.jsx is then in index.html
function App() {

  const [todos, setTodos] = useState([
    'Go to uni',
    'Go to the gym',    
    'Make a reservation'
  ]);
  
  return (
    <>
      <ToDoInput />
      <ToDoList todos={todos}/>      
    </>
  )
}

export default App
