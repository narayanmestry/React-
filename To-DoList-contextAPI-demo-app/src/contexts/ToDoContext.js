import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    sssss: '',
    todos: [
        {
            id: 1,
            todo: "I am todo1",
            completed: false
        }
    ],
    addToDo: (todo) => { },
    updateToDo: (id, todo) => { },
    deleteToDo: (id) => { },
    toggleComplete: (id) => { }


})

export function useToDo () {
    return useContext(ToDoContext);
}

export const ToDoProvider = ToDoContext.Provider;