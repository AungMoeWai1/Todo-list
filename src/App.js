import "./App.css";
import List from "./components/List";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import { useEffect, useState } from "react";
import { api } from "./api/apiResource";
import uuid from "react-native-uuid";

function App() {
  const [tasks, setTasks] = useState([]);
  const fetchData = async () => {
    const response = await api.get("/todolist");
    setTasks(response.data);
  };
  useEffect(() => {
    fetchData();
  }, [tasks]);

  const submitTask = async (userTask) => {
    const data = {
      id: uuid.v4(),
      task: userTask,
      complete: false,
    };
    await api.post("/todolist", data);
  };

  const deleteTask = async (taskId) => {
    await api.delete(`/todolist/${taskId}`);
  };

  const updateTask = async (task_id, complete_status) => {
    await api.patch(`/todolist/${task_id}`, { complete: complete_status });
  };
  return (
    <>
      <Form submitTask={submitTask} />
      <List tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}/>
    </>
  );
}

export default App;
