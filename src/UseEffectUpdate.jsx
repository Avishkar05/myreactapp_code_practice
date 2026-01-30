import React, { useEffect, useState } from 'react'

export default function UseEffectUpdate() {

  let [counter,setCounter]=useState(0);

  useEffect(()=>{
    console.log("this is update phase!")
    if(counter <= 10)
    {
      setCounter(counter + 1);
      console.log("counter is "+counter)
    }
  })

  return (
    <div>
        <h1>-------------- UseEffectUpdate --------------</h1>
        <h1>counter is {counter}</h1>
        <button onClick={()=>{setCounter(1)}}>update counter</button>
    </div>
  )
}
