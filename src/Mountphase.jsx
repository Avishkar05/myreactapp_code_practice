import React, { Component } from 'react'

export default class Mountphase extends Component {
    constructor(){
        super();
        console.log("This is  constructor in Class");
        this.state={"counter":0}
    }
    update=()=>{
        this.setState({"counter":this.state.counter+1})
    }

    componentDidMount(){
        console.log("this is example of componentDidMount ")
        document.addEventListener("keydown", this.handleKeyPress)
    }

    // componentWillUnmount() {
    //     document.removeEventListener("keydown", this.handleKeyPress)
    // }

    handleKeyPress=(event)=>{
        console.log(event.key)
    }

    render() {
      console.log("This is  Render  in Class");

    return (
      <div>
        <h1>counter is {this.state.counter}</h1>
        <button onClick={this.update}>update counter</button>
        
        <h1>--------------Event Handling----------------</h1>
        Enter name: <input type="text" />
        
      </div>
    )
  }
}
