import React from "react";
import { useTasks } from "../context/taskContext";
import Layout from "../components/Layout";

const Home = () => {

  const { tasks } = useTasks();
  console.log(tasks)
  return (
    <Layout>
      <div>
        Hello World
      </div>
    </Layout>

  )
}

export default Home