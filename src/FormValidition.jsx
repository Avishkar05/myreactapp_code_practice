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

    // let passcheck=()=>{
    //     if(password == confirmpassword)
    //     {
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // }

    let Validation=()=>{
        if(firstname=="" || lastname=="" || DOB=="" || Email=="" || gender=="" || number==0 || 
            Address=="" || username=="" || password=="" || confirmpassword=="")
        {
            alert("Please fill all the fields correctly")
            return false;
        }

        //compare pattern for firstname A-Z & a-z
        else if(!/^[A-Za-z]{2,20}$/.test(firstname)){
            alert("Firstname must contains only alphabates....")
            return false;
        }
        
        //compare pattern for Lastname A-Z & a-z    
        else if(!/^[A-Za-z]{2,20}$/.test(lastname)){
            alert("Lastname must contains only alphabates....")
            return false;
        }
        
        //compare number must 10 no more no less
        // \d --> for number
        else if(!/^\d{10}$/.test(number)){
            alert("Enter valid Number!")
            return false;
        }

        //compare email is valid or not
        // + --> 1 or more 
        // * --> 0 or more 
        else if(!/^[a-z]+[0-9]*@[a-z]+\.[a-z]{2,}$/.test(Email)){
            alert("Enter Valid Email address")
            return false;
        }

        //compare password and confirmpassword 
        else if(password != confirmpassword){
            alert("Password incorrect!!")
            return false;
        }

        // username
        // ?=  --> At least one time
        // .   --> any single character
        // .*  --> any character any number of time
        else if(!/^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*()-=_+])[A-Za-z0-9!@#$%^&*()-=_+]{6,}$/.test(username)){
            alert("Enter valid username " +
                "Please Enter at least one Character one number one Special symbol and minimum 6 characters")
            return false;
        }

        // password
        else if(!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+-=])([A-Za-z0-9!@#$%^&*()_+-=]{8,12})$/.test(password)){
            alert("Enter valid Password " +
                "Please Enter at least one Character one number one Special symbol and minimum 8 characters")
            return false;
        }

        else{
            return true;
        }
    }
    
    let register=(event)=>{
        event.preventDefault();
        // if(Validation() & passcheck()){
        if(Validation()){
            alert("Form submit Sucessfully!!!")
        }
        // else if (!passcheck()) {
        //     alert("Password incorrect!!")
        // }
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
            
            <button>Register</button><br />
        </form>


    </div>
  )
}
