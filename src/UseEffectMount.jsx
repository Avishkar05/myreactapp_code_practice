import React from 'react'
import { useEffect } from 'react'

export default function UseEffectMount() {

    useEffect(()=>{
        document.addEventListener("keydown",handelkeydown)
    })

    let handelkeydown=(event)=>{
        console.log(event.key)
    }

  return (
    <div>
        <h1>--------- UseEffectMount ----------</h1>
        Enter name :<input type='text'></input>
    </div>
  )
}
