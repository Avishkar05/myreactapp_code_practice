import React, { useEffect } from 'react'

export default function UseEffectUnmount() {

    useEffect(()=>{
        document.addEventListener("click",handleclick)

        return()=>{
            document.removeEventListener("click",handleclick);
            console.log("Event removed sucessfully!!")
        }
    })

    let handleclick=()=>{
        let now = new Date();
        alert("current date and time is "+now)
    }

  return (
    <div>
        <h1>--------------------- UseEffectUnmount ---------------------</h1>
        <button>Click here to add event</button>
    </div>
  )
}
