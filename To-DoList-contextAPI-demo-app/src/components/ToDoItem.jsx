import React, { useState } from 'react'
import { useToDo } from '../contexts/ToDoContext';

function ToDoItem ({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [toDoMsg, settoDoMsg] = useState(todo.todo);
  const { deleteToDo, updateToDo, toggleComplete,sssss } = useToDo()

  console.log("isTodoEditable---", isTodoEditable);
  const toggleCompleted = () => {
    toggleComplete(todo.id);
  }
  const editTodo = () => {
    updateToDo(todo.id, { ...todo, todo: toDoMsg })
  }
  console.log("-----" , sssss);
  return (
    <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}>
      <input
        type="checkbox"
        className='cursor-pointer'
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"} ${todo.completed ? "line-through" : ""}`}
        value={toDoMsg}
        onChange={(e) => settoDoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <button
        className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'
        onClick={() => {
          editTodo()
          setIsTodoEditable((prev) => !prev)
        }}
      >
        {isTodoEditable ? '📁' : '✏️'}
      </button>
      <button className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-50 shrink-0'
        onClick={() => deleteToDo(todo.id)}>
        ❌
      </button>
    </div>
  )
}

export default ToDoItem


/* 

Is todoeditable  -> true
  make text field editable 
  show edit icon


*/