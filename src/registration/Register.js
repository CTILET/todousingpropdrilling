import React from "react"
import "./register.css"
import { useState } from "react"

const Register = () => {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="registerBar">
      <label htmlFor="Логин">Username</label>
      <input
        type="text"
        value={login}
        onChange={(event) => {
          const input = event.target.value
          if (
            !input.includes("@") &&
            !input.includes(" ") &&
            !input.includes("#") &&
            !input.includes("!")
          ) {
            {
              setLogin(input)
            }
          }
        }}
        placeholder="Login to get advantage"
        required
      />
      <label htmlFor="пароль">Password</label>
      <input
        type="password"
        value={password}
        onChange={(event) => {
          const input = event.target.value
          if (!input.includes(" ")) {
            setPassword(input)
          }
        }}
        placeholder="Enter your password"
        required
      />
      <div className="registerBtn">
        <button>Enter</button>
        <button>Register</button>
      </div>
    </div>
  )
}

export default Register
