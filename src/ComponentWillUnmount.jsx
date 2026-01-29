import React, { Component } from 'react'

export default class ComponentWillUnmount extends Component {
   
    componentWillUnmount()
    {
        console.log("this is unmounting phase!!!")
    }
  render() {
    return (
      <div>
        <h1>----------------- ComponentWillUnmount method -----------------</h1>
      </div>
    )
  }
}
