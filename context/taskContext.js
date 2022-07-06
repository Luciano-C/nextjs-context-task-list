import { createContext, useContext, useState } from "react";
// Genera id aleatorios (se instaló con npm i uuid)
import { v4 as uuid } from "uuid";


export const TaskContext = createContext();

// Para evitar llamar el contexto y use context en cada componente (custom hook)
export const useTasks = () => {
    return useContext(TaskContext);
}


export const TasksProvider = ({children}) => {
    
    const [tasks, setTasks] = useState([{id: "1", title: "first task", description: "some task"}]);

    // ...tasks toma las tareas que ya están y luego añade el objeto
    const createTask = (title, description) => {
        setTasks([...tasks, {title, description, id: uuid()}])
        console.log(tasks)  
    }

    const updateTask = (id, updatedTask) => {
        setTasks([...tasks.map(task => task.id === id ? {...task, ...updatedTask} : task)])
    }

    const deleteTask = id => {
        setTasks([...tasks.filter(task => task.id !== id)])
    }
    
    return (
        <TaskContext.Provider value={{tasks, createTask, updateTask, deleteTask}}>
            {children}
        </TaskContext.Provider>
    )
}