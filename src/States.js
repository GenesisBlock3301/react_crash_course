import React from "react";


class StateApp extends React.Component{

    constructor(){
        super();
        this.state = {
            count:0
            // title: 'Book one',
            // author: "Sifat Nas",
            // year: '2020'
        }
    }
    btnClick(){
        this.setState({
            count:this.state.count+1
        })
    }
    render() {
        return(
            <div>
                <h1>Value is {this.state.count}</h1>
                <button onClick={this.btnClick.bind(this)}>Click Me</button>
            </div>
        )
    }
}

export default StateApp;