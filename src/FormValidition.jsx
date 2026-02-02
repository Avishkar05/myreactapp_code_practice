import React, { useState } from 'react'

export default function FormValidition() {

    let [firstname,setFirstname]=useState("")
    let [lastname,setLastname]=useState("")
    let [DOB,setDOB]=useState("")
    let [gender,setGender]=useState("")
    let [number,setNumber]=useState("")
    let [Email,setEmail]=useState("")
    let [Address,setAddress]=useState("")
    let [username,setUsername]=useState("")
    let [password,setPassword]=useState("")
    let [confirmpassword,setConfirmpassword]=useState("")

    let passcheck=()=>{
        if(password == confirmpassword)
        {
            return true;
        }
        else{
            return false;
        }
    }

    let Validation=()=>{
        if(firstname=="" || lastname=="" || DOB=="" || Email=="" || gender=="" || number==0 || 
            Address=="" || username=="" || password=="" || confirmpassword=="")
        {
            alert("Please fill all the fields correctly")
            return false;
        }
        else{
            return true;
        }
    }
    
    let register=()=>{
        if(Validation() & passcheck()){
            alert("Form submit Sucessfully!!!")
        }
        if (!passcheck()) {
            alert("Password must match with confirmpassword!!")
        }
        else{
            alert("Please fill all the fields..")
        }
    }

    return (
        <div>
        <h1>-------------------- Registration From --------------------</h1>

        <form onSubmit={register}>
            firstname : <input type="text" onChange={(event)=>{setFirstname(event.target.value)}}></input><br />
            lastname : <input type="text" onChange={(event)=>{setLastname(event.target.value)}}></input><br />
            select DOB : <input type="date" onChange={(event)=>{setDOB(event.target.value)}}></input><br />
            Select gender : <input type="radio" name="gender" value="Female" onChange={(event)=>{setGender(event.target.value)}}></input> Female
            <input type="radio" name="gender" value="Male" onChange={(event)=>{setGender(event.target.value)}}></input> male <br />
            Enter number : <input type="number" onChange={(event)=>{setNumber(event.target.value)}}></input><br />
            Enter Email : <input type='text' onChange={(event)=>{setEmail(event.target.value)}}></input><br />
            Enter Address : <textarea cols="10" rows="4" onChange={(event)=>{setAddress(event.target.value)}}></textarea><br />
            Enter username : <input type="text" onChange={(event)=>{setUsername(event.target.value)}}></input><br />
            Enter password  : <input type="password" onChange={(event)=>{setPassword(event.target.value)}}></input><br />
            Enter confirmpassword  : <input type="password" onChange={(event)=>{setConfirmpassword(event.target.value)}}></input><br />
        <button value="Register">Register</button><br />
        </form>


    </div>
  )
}
