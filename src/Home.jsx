import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    let navigate = useNavigate();
  return (
    <div>
        <h1 style={{"color":"red","fontSize":"25px","backgroundColor":"purple"}}>This is home page</h1>
        <button onClick={()=>{navigate("/about")}}>click here to open about us page</button>
    </div>
  )
}
