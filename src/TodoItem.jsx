import React from 'react'

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li>
      <span
        onClick={() => onToggle(todo.id)}
        className={todo.completed ? 'completed' : ''}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  )
}

export default TodoItem