import { Component } from "react";

class Student extends Component{

    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <h1>This is child component</h1>
                <h2>name of student is {this.props.name}</h2>
                <h2>Course of student is {this.props.course}</h2>
                <h2>age of student is {this.props.age}</h2>
                <h2>Email of student is {this.props.email}</h2>
            </div>
        )
    }
}
export default  Student;

