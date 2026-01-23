import { Component } from "react";

class SetstateExample extends Component{
    constructor(){
        super();
        this.state={"Counter":0,"Data":100,"number":0}
    }

    update=()=>{
                                // increse the value of counter by 1
        this.setState({"Counter":this.state.Counter+1,"Data":this.state.Data+1})
    }

    updateP=()=>{
        this.setState({"number":this.state.number+1})
    }
    updateN=()=>{
        this.setState({"number":this.state.number-1})
    }


    render(){
        return(
            <div>
                <h1>This is example of set state</h1>
                <h1>value of counter is {this.state.Counter} <br></br>
                    Value of data is {this.state.Data}
                </h1>
                <button onClick={this.update}>click here to update the values</button>

                <h1>this is increament and decremaent</h1>
                <h1>value of number is {this.state.number}</h1>
                <button onClick={this.updateP}>click here to increse number</button>
                <button onClick={this.updateN}>click here to decremaent number</button>
                
            </div>
        )
    }

}

export default SetstateExample;    