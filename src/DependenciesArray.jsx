import React, { useEffect, useState } from 'react'

export default function DependenciesArray() {

    let [counter,setCounter]=useState(0);
    let [data,setData]=useState(0);

    useEffect(()=>{
        console.log("this method called when value of any variable is updated!!")
    },[])

  return (
    <div>
        <h1>--------------------- DependenciesArray ---------------------</h1>
        <h1>counter is {counter}</h1>
        <h1>data is {data}</h1>

        <button onClick={()=>{setCounter(counter+5)}}>update counter</button>
        <button onClick={()=>{setData(data+5)}}>update data</button>
    </div>
  )
}