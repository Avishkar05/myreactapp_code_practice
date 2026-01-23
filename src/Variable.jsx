import { Component } from "react";

class Variable extends Component{

    a=20;
    constructor()
    {
        super();
    }

    update=()=>
    {
        this.a=30;
        console.log("Value of a is "+this.a);
    }

    render(){
        return(
            <div>
                <h1>This is react Variable Ex</h1>
                <h2>Value of a is {this.a}</h2>
                <button onClick={this.update}>Click here to update value of a</button>
            </div>
        );
    }
}

export default Variable;