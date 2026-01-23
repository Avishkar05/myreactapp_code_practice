import { Component } from "react";

class State extends Component{
    constructor(){
        super();
        this.state={"name":"Avishkar","age":21}
    }

    render(){
        return(
            <div>
                <h1>name is {this.state.name} <br></br>
                     age is {this.state.age}</h1>
            </div>
        )
    }
}

export default State;