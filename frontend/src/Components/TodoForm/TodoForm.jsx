import React, { Fragment, useState } from 'react'
import './TodoForm.css'
import { ToastContainer, toast } from 'react-toastify';
import '../../../node_modules/react-toastify/dist/ReactToastify.css';
import { createTask } from '../../utils/apiRoutes';

const TodoForm = () => {


  const [task, setTask] = useState("")

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleSubmit  = (e) =>{
    e.preventDefault()
    handleValidation()
  }

  const handleValidation = () =>{
    if(task===""){
      // toast.error("Paasword should be greater than 8 characters", toastOptions);
      // return false;
    }
  }

  const handleOnChange = (event) => {
    setTask(event.target.value);
  };

  return (
    <Fragment>
      
          <form className='hero' onSubmit={(e) => handleSubmit(e)}>
            <input className='task' name='task' type="text" placeholder='Enter Task' onChange={(e)=>{handleOnChange(e)}} />
            <button className='btn' type="submit">Add Task</button>
          </form>
          <ToastContainer />
       
    </Fragment>
  )
}

export default TodoForm