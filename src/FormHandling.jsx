import React, { useState } from 'react'

export default function FormHandling() {

    let [firstname,setFirstname]=useState("")
    let update=(event)=>{
        setFirstname(event.target.value)
    }
    let userregister=()=>
    {
        alert("welcome dear "+firstname)
    }
     
  return (
    <div>
        <h1>-------------------------- FormHandling --------------------------</h1>
        <form onSubmit={userregister}>
            Enter firstname :<input type='text' onChange={update}></input>
            <input type="submit" value="Register"></input>
        </form>
    </div>
  )
}
