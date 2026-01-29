import React, { Component } from 'react'

export default class ComponentDidUpdate extends Component {
  
    constructor(){
        super();
        this.state = {"counter":1}
    }

    update=()=>{
        this.setState({"counter":this.state.counter+1 });
    }
    componentDidUpdate(prevProps,prevState){
        console.log("this is ComponentDidUpdate");
        if(this.state.counter <= 3){
            this.setState({"counter":this.state.counter+1})
            console.log("counter is "+this.state.counter)
            console.log("previous value of counter is   "+prevState.counter)
        }
    }
    render() {
    return (
      <div>
        <h1>---------------------- ComponentDidUpdate ----------------------</h1>
        <h1>counter is :{this.state.counter}</h1>
        <button onClick={this.update}>update counter</button>
      </div>
    )
  }
}
