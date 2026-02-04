import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Aboutus() {
  let navigate = useNavigate();
  return (
    <div>
        <h1>This is About us page</h1>
        <button onClick={()=>{navigate("/home")}}>click here to open home page</button>
        <button onClick={()=>{navigate(-1)}}>back</button>
    </div>
  )
}
