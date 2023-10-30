import './App.css'
import { ToDoProvider } from './contexts'
import ToDoForm from './components/ToDoForm'
import ToDoItem from './components/ToDoItem'
import { useEffect, useState } from 'react'

function App () {
  const [todos, setTodos] = useState([]);
  const [sssss, setsssss] = useState('Infogen');
  const addToDo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, { id: Date.now(), ...todo }])
  }

  const updateToDo = (id, todo) => {
    setTodos((prevTodos) => prevTodos.map((singleTodo) => (singleTodo.id === id ? todo : singleTodo)))
  }

  const deleteToDo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((singleTodo) => (singleTodo.id !== id)))
  }

  const toggleComplete = (id) => {
    setTodos((prevTodos) => prevTodos.map((singleTodo) => (singleTodo.id === id ? { ...singleTodo, completed: !singleTodo.completed } : singleTodo)))
  }

  /* This Useeffect I have used for get data from local storage when App launch  */
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, [])

  /* This useEffect I have used for adding data to Local Storage */
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  console.log("ALL todos ", todos);
  return (
    <ToDoProvider value={{ todos, addToDo, updateToDo, deleteToDo, toggleComplete, sssss }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className='mb-4'>
            {/* To do form will be here */}
            <ToDoForm />
          </div>

          <div className='flex flex-wrap gap-y-3'>

            {/* List will get here */}

            {
              todos.map((todo) => {
                return (
                  <div key={todo.id} className='w-full'>
                    <ToDoItem todo={todo} />
                  </div>
                )
              })
            }


          </div>
        </div>
      </div>
    </ToDoProvider>
  )
}

export default App
