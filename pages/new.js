import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useTasks } from "../context/taskContext"
import { useRouter } from "next/router";

const TaskFormPage = () => {
    const [task, setTask] = useState({
        title: "",
        description: ""
    });

    const { createTask, updateTask, tasks } = useTasks();
    const router = useRouter();


    //Query da la información en la url

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!router.query.id) {
            createTask(task.title, task.description);
        }
        else {
            updateTask(router.query.id, task)
        }
        router.push("/")
    }

    useEffect(() => {
        if (router.query.id) {
            const taskFound = tasks.find(task => task.id === router.query.id);
            setTask({ title: taskFound.title, description: taskFound.description })
            console.log(taskFound)
        }
    }, [])

    return (
        <Layout>
            <div className="flex justify-center items-center h-full">
                <form onSubmit={handleSubmit} className="bg-gray-700 p-10 h-2/4">
                    <h1 className="text-3xl mb-7">{router.query.id ? "Update task" : "Create a task"}</h1>

                    <input type="text" placeholder="Write a title" name="title" className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
                        onChange={handleChange} value={task.title}
                    />

                    <textarea rows="2" placeholder="Write a description" name="description" className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
                        onChange={handleChange} value={task.description}>
                    </textarea>

                    <button className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30" disabled={!task.title}>
                        Save
                    </button>
                </form>
            </div>


        </Layout>

    )

}

export default TaskFormPage