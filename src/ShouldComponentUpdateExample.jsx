import React, { Component } from 'react'

export default class ShouldComponentUpdateExample extends Component {
  constructor(){
    super();
    this.state={"counter":0,"data":0}
    
  }

  update=()=>{
    this.setState({"counter":this.state.counter+1})
    // console.log("this is ShouldComponentUpdate method!!!")
    this.setState({"data":this.state.data-5})
    console.log("counter "+this.state.counter)
  }

  shouldComponentUpdate(){
    console.log("This is ShouldComponentUpdate")
    return true;
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    //preState
    console.log("before update counter is "+ prevState.counter)
    console.log("before update data is "+ prevState.data)
  }

    render() {
    return (
      <div>
        <h1>Counter is {this.state.counter}</h1>
        <button onClick={this.update}>update counter</button>
        <button onClick={this.update}>update counter</button>
        

      </div>
    )
  }
}
