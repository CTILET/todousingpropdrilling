import "./taskList.css"
import { useState } from "react"
import React from "react"
import { FaTrashAlt } from "react-icons/fa"
import { TiPen } from "react-icons/ti"
import { AiFillCheckCircle } from "react-icons/ai"
import { AiOutlineCheckCircle } from "react-icons/ai"

const TaskList = ({ task, onDelete, rename, isCompleted, onCompleted }) => {
  return (
    <>
    
    <div>
      <div className="taskDesk">
        <h1 style={{ textDecoration: isCompleted ? "line-through" : "unset" }}>
          {task}
        </h1>
        <div>
          <AiOutlineCheckCircle className="trash" onClick={onCompleted} />

          <TiPen className="trash" onClick={rename} />
          <FaTrashAlt
            className="trash"
            onClick={onDelete}
            role="button"
            tabIndex={0}
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default TaskList
