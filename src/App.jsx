import { useState, useEffect } from "react";
import Input from "./components/Input";
import Search from "./components/Search";
import TaskList from "./components/TaskList";
import { getTasksFromStorage } from "./utils/getTasksFromStorage";

function App() {

  const [tasks, setTasks] = useState(getTasksFromStorage());
  const [query, setQuery] = useState("");

  const handleAddTask = (description) => {
    const now = new Date();
    const newTask = {
      id: self.crypto.randomUUID(),
      description,
      dueDate: new Intl.DateTimeFormat('es-Ar',{
        dateStyle: "long"
      }).format(now),
    }

    setTasks((prevTasks) => [...prevTasks, newTask]);
    //se utiliza useEffect xq sino no llega a guardar el ultimo valor, recordemos que useEffect se lanza
    //una vez este el elemento se monta, por lo tanto va a tener los valores actualizados
  }
  
  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])
  return (
    <>
      <header>
        <h1>Lista de tareas</h1>
        <p>No es original.... pero sirve para aprender</p>
      </header>
      <p>Valor de query: {query}</p>
      {/* se denomina custom event, es un evento personalizado que se envia en vez
      de enviar el setTask xq es mala practica */}
      <Search onQuery={(text) => setQuery(text)} />
      <Input onAddTask={(description) => handleAddTask(description)} />
      <TaskList tasks={tasks} setTasks={setTasks} query={query} />

    </>
  )
}

export default App