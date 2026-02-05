import React, { useState } from 'react'

export default function ModalExample() {
    let [isvisible,setIsvisible]=useState(false)
  return (
    <div>
        <button onClick={()=>{setIsvisible(true)}}>New user? Click here to register your account</button>
        {
            isvisible?
            <div class="modal  show d-block" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Register Your Account</h5>
                    <button type="button" class="btn-close" onClick={()=>{setIsvisible(false)}}  aria-label="Close"></button>
                </div>
                {/* Body */}
                <div class="modal-body">
                    <label className='form-lable'>Enter Email</label>
                    <input type="text" className='form-control'></input>

                    <label className='form-lable'>Enter Username</label>
                    <input type="text" className='form-control'></input>

                    <label className='form-lable'>Enter Password</label>
                    <input type="password" className='form-control'></input>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" onClick={()=>{setIsvisible(false)}}>Close</button>
                    <button type="button" class="btn btn-primary" >Create Acount</button>
                </div>
                </div>
            </div>
            </div>
            :null
        }
    </div>
  )
}
