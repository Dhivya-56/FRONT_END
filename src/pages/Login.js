import React ,{useState}from 'react'
import {  useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate=useNavigate()
    const[name,setName]=useState('')
    const[password,setPassword]=useState('')
function handleLogin(){
    navigate('/home')
}
  return (
    <div className="login">
      <h1>Login Page</h1>
      <label htmlFor="name">UserName</label>
      <input type="text" onChange={(e)=>setName(e.target.value)} value={name} className="input"/>
      <label htmlFor="password">Password</label>
      <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} className="input"/>
      <button className="btn"type="submit" onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login


