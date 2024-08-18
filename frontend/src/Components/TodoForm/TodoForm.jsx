import React, { Fragment, useState } from 'react'
import './TodoForm.css'
import { createTaskRoute, getAllTask  } from '../../utils/apiRoutes';

const TodoForm = () => {


  const [taskval, setTask] = useState({
    task:""
  })

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
     
        
      const response = await fetch(createTaskRoute, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify(taskval),
      });

      const data = await response.json();
      
      setTask({ task: "" });
      } catch(err){
        console.log(err);
      }
    }
  }



  const handleOnChange = (event) => {
    setTask({[event.target.name]: event.target.value});
  };

  return (
    <Fragment>

      <form className='hero' onSubmit={(e) => handleSubmit(e)}>
        <input className='task' value={taskval.task}  name='task' type="text" placeholder='Enter Task' onChange={(e) => { handleOnChange(e) }} />
        <button className='btn' type="submit">Add Task</button>
      </form>


    </Fragment>
  )
}

export default TodoForm