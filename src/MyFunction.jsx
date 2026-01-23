import { useState } from "react";

function MyFunction()
{

    let [name,setname] = useState("Avishkar");
    let [age,setage] = useState("21");
    let [course,setcourse] = useState("Java");

    let [counter,setcounter] = useState(0);
    let [Data,setData] = useState(0);

    let updateN =()=>{
        setname("Ketan");
    }

    let updateA =()=> {
        setage("22");
    }

    return(
        <div>
            <h1>This is my first function!!</h1>
            <h1>name is {name}</h1>
            <h1>age is {age}</h1>
            <h1>course is {course}</h1>
            
            <button onClick={updateN}>Click here to update name</button>
            <button onClick={updateA}>Click here to update age</button>

            <h1>counter is {counter}</h1>
            <button onClick={()=> {setcounter(counter+1)}}>click here to update counter</button>

            
            <h1>Data is {Data}</h1>
            <button onClick={()=> {setData(Data+5)} }>click here to update Data </button>
            <button onClick={()=> {setData(Data-5)} }>click here to decrase Data </button>
        </div>
    )
}
export default MyFunction;