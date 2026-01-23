import { Component } from "react";

class User_Info extends Component{

    constructor(){
        super();
        this.state={"isloggedin":true}
    }

    update=()=>{
        this.setState({ isloggedin: !this.state.isloggedin });
    }

    render()
    {
        return(
            <div>
                {
                    this.state.isloggedin?<h1>Welcome user</h1>:<h1>Welcome guest,please login</h1>
                }
                <button onClick={this.update}>click here to update </button>
            </div>
        )
    }
}

export default User_Info;