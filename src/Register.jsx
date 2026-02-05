import React from 'react'

export default function Register() {
  return (
    <div>
        <form >

            <label className='form-lable'>Enter Email</label>
            <input type="text" className='form-control'></input>

            <label className='form-lable'>Enter Username</label>
            <input type="text" className='form-control'></input>

            <label className='form-lable'>Enter Password</label>
            <input type="password" className='form-control'></input>
            
            <button className='btn btn-warning'>Click here to register your account</button>
        </form>
    </div>
  )
}
