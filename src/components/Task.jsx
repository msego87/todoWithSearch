import { RiDeleteBinLine } from "react-icons/ri";
import "./Task.css";

const Task = ({task, tasks, setTasks}) => {

    const handleTaskCompleted = (id) => {
        /* no sirve un foreach xq con react necesitas una copia de todo el objeto,
        por lo que el map retorna todo el objeto, se podria usar el filter tambien */
        
       const filteredTask = tasks.map(
        (t) => t.id !== id ? t: {...t, isCompleted: !t.isCompleted}
        );
        setTasks(filteredTask)
    
    }

    const handelDelete = (id) => {
        const remainingTasks = tasks.filter(t => t.id != id);

        //no se utiliza setTasks(remainingTasks); xq sino me crea un arreglo dentro de otro.
        //por lo tanto se desestructura el nuevo arreglo y se lo setea a tasks
        setTasks([...remainingTasks]);
    }

  return (
    <>
        <div className='taskContainer'>
            <p onClick={() => handleTaskCompleted(task.id)} 
                className={ task.isCompleted ? "completed" : ""}>
                {task.description} - {task.dueDate}
            </p><RiDeleteBinLine onClick={() => handelDelete(task.id)} />
        </div>
    </>
  )
}

export default Task