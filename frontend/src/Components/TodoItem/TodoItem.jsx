import React, { Fragment, useEffect, useState } from "react";
import "./TodoItem.css";
import { FaTrash, FaEdit } from "react-icons/fa";
import { getAllTask, deleteTaskRoute } from '../../utils/apiRoutes'




const TodoItem = () => {


  const [tasks, setTasks] = useState([])


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
        fetchTasks(); // Refresh the task list after deletion
      } else {
        console.error('Failed to delete the task:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };



  return (
    <Fragment>
      <section className="items">
        {
          tasks.map((task) => {
            return (
              <div className="item" key={task._id}>
                <h4 className="taskhead">{task.task}</h4>
                <div className="operations">
                  <FaEdit className="operation" />
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
