import React from 'react'
import ToDoCard from './ToDoCard'

export default function ToDoList(props) {  

  const {todos} = props;

  return (
    <ul className='main'>
      {todos.map((todo, toDoIndex) => {
        return (
          <ToDoCard key={toDoIndex}>
            <p>{todo}</p>
          </ToDoCard>
        )
      })}
    </ul>
  )
}
