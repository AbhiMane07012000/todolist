import React, { Fragment } from "react";
import "./TodoItem.css";
import { FaTrash, FaEdit } from "react-icons/fa";

const TodoItem = () => {
  return (
    <Fragment>
      <section className="items">
        <div className="item">
          <h4 className="taskhead">heading</h4>
          <div className="operations">
            <FaEdit className="operation" />
            <FaTrash className="operation" />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default TodoItem;
