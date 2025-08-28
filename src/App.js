import { useState } from "react";
import "./App.css";
import { Task } from "./Task";

function App() {
  const [TodoList, setTodList] = useState([]);
  const [NewTask, setNewTask] = useState("");

  const handlingChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: TodoList.length === 0 ? 1 : TodoList[TodoList.length - 1].id + 1,
      taskName: NewTask,
    };

    setTodList([...TodoList, task]);
  };
  const deleteTask = (id) => {
    const newTodList = TodoList.filter((task) => {
      if (task.id === id) return false;
      else return true;
    });

    setTodList(newTodList);
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handlingChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {TodoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              deleteTask={deleteTask}
            />
          );
        })}
      </div>
    </div>
  );
}
export default App;
