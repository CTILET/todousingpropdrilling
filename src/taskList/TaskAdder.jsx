import React from "react"
import { useState } from "react"
import TaskList from "./TaskList"

const TaskAdder = () => {
  const [taskText, setTaskText] = useState("")
  const [search, setSearch] = useState("")
  const addNewTask = () => {
    if (taskText.length > 0) {
      const lastTask = tasks[tasks.length - 1]
      const id = lastTask ? lastTask.id + 1 : 0
      setTasks([...tasks, { id, text: taskText, isCompleted: false }])
    }
  }
  const [tasks, setTasks] = useState([
    {
      id: 0,
      text: "Learn React",
      isCompleted: false,
    },
    {
      id: 1,
      text: "Learn Redux",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Learn React Native",
      isCompleted: false,
    },
  ])

  return (
    <>
      <div style={{ maxWidth: "800px", margin: "auto", padding: "5px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontWeight: "700" }}>Task List </h1>
          <div>
            <input
              className="inputer"
              required
              type="text"
              value={taskText}
              onChange={(e) => setTaskText(e.target.value.trimStart())}
              placeholder="What shall be done?"
            />
            <button className="btn" onClick={addNewTask}>
              Add task
            </button>
          </div>
        </div>
        <input
          type="text"
          placeholder="find"
          className="inputer"
          style={{ width: "100%" }}
          value={search}
          onChange={(e) => setSearch(e.target.value.trimStart())}
        />
        {tasks
          .filter((task) =>
            task.text.toLowerCase().includes(search.toLowerCase())
          )
          .map((task) => (
            <TaskList
              task={task.text}
              key={task.id}
              isCompleted={task.isCompleted}
              onCompleted={() => {
                setTasks(
                  tasks.map((oldTask) => {
                    if (task.id === oldTask.id) {
                      return { ...oldTask, isCompleted: !oldTask.isCompleted }
                    }
                    return oldTask
                  })
                )
              }}
              rename={() => {
                const newText = prompt("Изменить задачу?")
                if (newText) {
                  setTasks(
                    tasks.map((oldTask) => {
                      if (task.id === oldTask.id) {
                        return { ...oldTask, text: newText }
                      }
                      return oldTask
                    })
                  )
                }
              }}
              onDelete={() => {
                const isConfirmed = window.confirm(
                  "Are you sure you want to delete this task?"
                )
                if (isConfirmed) {
                  setTasks(
                    tasks.filter((oldTask) => {
                      return task.id !== oldTask.id
                    })
                  )
                }
              }}
            />
          ))}
      </div>
    </>
  )
}

export default TaskAdder
