import TaskList from "./taskList/TaskList"
import { useState } from "react"
import Register from "./registration/Register"
import Scroll from "./scrollbar/Scroll"
import TaskAdder from "./taskList/TaskAdder"
import { FaTrashAlt } from "react-icons/fa"


export default function App() {
  
  return (
    <>
      {/* <Register /> */}
      
      <TaskAdder />
      <Scroll />
    </>
  )
}
