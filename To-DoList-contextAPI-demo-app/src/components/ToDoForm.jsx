import React, { useState } from 'react'
import {useToDo} from "../contexts/ToDoContext"

function ToDoForm () {
    /* use to set the indivisual todo */
    const [todo, setTodo] = useState('');
    const {addToDo} = useToDo();

    /* access the method from context */
    const add = (e) => {
        e.preventDefault()
        if (!todo) return

        addToDo({todo:todo, completed: false })
        console.log("Add to do method ",addToDo);
    }


    return (
        <div>
            <form onSubmit={add} className='flex'>
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder='Write to do'
                    className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button
                    type="submit"
                    className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0'
                >Add</button>
            </form>
        </div>
    )
}

export default ToDoForm


/* 
duration-150 


*/