import React, { Component } from 'react'

export default class ComponentWillUnmount extends Component {
   
    componentDidMount()
    {
        document.addEventListener("keydown",this.handelkeydown)
    }

    handelkeydown=(event)=>{
        console.log(event.key)
    }

    componentWillUnmount()
    {
        console.log("this is unmounting phase")
        document.removeEventListener("keydown",this.handelkeydown)
    }

  render() {
    return (
      <div>
        <h1>----------------- ComponentWillUnmount method -----------------</h1>
        name :<input type='text'></input>
      </div>
    )
  }
}
 