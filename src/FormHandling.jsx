import React, { useState } from 'react'

export default function FormHandling() {

    let [firstname,setFirstname]=useState("")
    let [lastname,setLastname]=useState("")
    let [city,setCity]=useState("")
    let [gender,setGender]=useState("")
    let [check,setCheck]=useState("")


    let update=(event)=>{
        setFirstname(event.target.value)   
    }
    let userregister=()=>
    {
        if(!check){
            alert("please select tearms and condition ")
        }
        else{
            alert("welcome dear "+firstname+" "+lastname+" you select city "+city+" you select gender "+gender)
        }    
    }
     
  return (
    <div>
        <h1>-------------------------- FormHandling --------------------------</h1>
        <form onSubmit={userregister}>
            Enter firstname :<input type='text' onChange={update}></input><br />
            Enter lastname :<input type='text' 
                onChange={(event)=>{setLastname(event.target.value)}}></input><br />

            {/* Option */}
            Select City<select  onClick={(event)=>{setCity(event.target.value)}}>
                <option value="">Select City</option>
                <option value="Pune">Pune</option>
                <option value="Satara">Satara</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Sangali">Sangali</option>
            </select><br />

            {/* radio */}
            Enter Your Gender : <input type='radio' value="Female" name="Gender" onChange={(event)=>{setGender(event.target.value)}}></input>female 
            <input type='radio' value="Male" name="Gender" onChange={(event)=>{setGender(event.target.value)}}></input>Male <br />

            {/* checkbox */}
            <input type="checkbox" onChange={(event)=>{setCheck(event.target.checked)}}></input>I accept all terms and condtion <br />
            
            <input type="submit" value="Register" disabled={!check}></input>
        </form>
    </div>
  )
}
