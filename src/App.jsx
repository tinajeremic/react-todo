import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"

//highest level parent
//it gets rendered in main.jsx
//root from main.jsx is then in index.html
function App() {
  
  return (
    <main>
      <ToDoInput />
      <ToDoList />      
    </main>
  )
}

export default App
