import { createContext, useContext, useState } from "react";


export const TaskContext = createContext();

// Para evitar llamar el contexto y use context en cada componente (custom hook)
export const useTasks = () => {
    return useContext(TaskContext);
}


export const TasksProvider = ({children}) => {
    
    const [tasks, setTasks] = useState([{id: "1", title: "first task", description: "some task"}]);
    
    return (
        <TaskContext.Provider value={{tasks}}>
            {children}
        </TaskContext.Provider>
    )
}