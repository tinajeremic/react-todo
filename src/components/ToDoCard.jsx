import React from 'react'

export default function ToDoCard(props) {

  const {children, handleDeleteTodo, index} = props;

  return (
    <li className='todoItem'>
      {children}
      <div className='actionsContainer'>
        <button>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => {
          handleDeleteTodo(index);
        }}>
        <i className="fa-regular fa-trash-can"></i>
        </button>        
      </div>      
    </li>
  )
}
