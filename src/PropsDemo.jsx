import {useState} from "react";

function PropsDemo(Props){
    
    let [isvisible,setisvisible] = useState(true);
    

    return(
        <div>
            <h1>Child Component</h1>
            <h2>name is {Props.name}</h2>
            <h3>age is {Props.age}</h3>

            {
                isvisible?<h1>hello student!</h1>:<h1>hello Stranger!</h1>
            }

            <button onClick={()=> {setisvisible(false)}}>click here to update isvisible</button>

        </div>
    )
}

export default PropsDemo;