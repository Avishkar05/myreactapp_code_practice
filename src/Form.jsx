import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Form() {

// let navigate = useNavigate();
  return (
    <div>
        <form >
            <label className='form-lable'>Enter Username</label>
            <input type="text" className='form-control'></input>
            <label className='form-lable'>Enter Password</label>
            <input type="password" className='form-control'></input>
            <button className='btn btn-primary'>Login</button>
            
            {/* <button className='btn btn-warning' >New user? Click here to register your account</button> */}
            {/* <button className='btn btn-warning' onClick={()=>{navigate("/Register")}}>New user? Click here to register your account</button> */}
            {/* <button onClick={()=>navigate(-1)}>back to login</button> */}
        </form>
    </div>
  )
}
