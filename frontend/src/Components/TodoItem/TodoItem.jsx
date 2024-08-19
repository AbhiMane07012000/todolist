import React, { Fragment, useEffect, useState } from "react";
import "./TodoItem.css";
import { FaTrash, FaEdit } from "react-icons/fa";
import { getAllTask, deleteTaskRoute, createTaskRoute ,updateTaskRoute } from '../../utils/apiRoutes'




const TodoItem = () => {


  const [tasks, setTasks] = useState([])
  const [taskval, setTask] = useState({
    task:""
  })

  const [ isEditing , setEditing ] =useState(false)
  const [ currentID , setCurrentID] = useState(null)

  const fetchTasks = async () => {
    const alltask = await getAllTask()
    setTasks(alltask)

  }


  useEffect(() => {


    fetchTasks()

  }, [])

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${deleteTaskRoute}${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        fetchTasks(); 
      } else {
        console.error('Failed to delete the task:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

 

  const handleValidation = () => {
    const {task} = taskval
    if (task === "") {
      alert("You must give some task to Add..!")
      return false
    }
    return true
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    if (handleValidation()) {
      try{
     
      if(isEditing){
        const response =  await fetch(`${updateTaskRoute}${currentID}`,{
          method:"PUT",
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON
          },
          body: JSON.stringify(taskval),
        })
        console.log(response);
        setEditing(false)
        setTask({
          task:""
        })
        
      }  


      else{
        const response = await fetch(createTaskRoute, {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON
          },
          body: JSON.stringify(taskval),
        });
  
        const data = await response.json();
        console.log(data);
      }  

  
      fetchTasks()
      
      setTask({ task: "" });
      } catch(err){
        console.log(err);
      }
    }
  }

const handleEdit = async(task) =>{
  setEditing(true)
  setTask({
    task:task.task
  })
  setCurrentID(task._id)
}

  const handleOnChange = (event) => {
    setTask({[event.target.name]: event.target.value});
  };

  return (
    <Fragment>
      <form className='hero' onSubmit={(e) => handleSubmit(e)}>
                  <input className='task' value={taskval.task} name='task' type="text" placeholder='Enter Task' onChange={(e) => { handleOnChange(e) }} />
                  <button className='btn' type="submit">{isEditing ? "Update" : "Add Task"}</button>
                </form>
      <section className="items">
        {
          tasks.map((task) => {
            return ( 
                <div className="item" key={task._id}>
                  <h4 className="taskhead">{task.task}</h4>
                  <div className="operations">
                    <FaEdit onClick={()=>{ handleEdit(task) }} className="operation" />
                    <FaTrash onClick={() => handleDelete(task._id)} className="operation" />
                  </div>
                </div>
            )
          })
        }
      </section>
    </Fragment>
  );
};

export default TodoItem;
